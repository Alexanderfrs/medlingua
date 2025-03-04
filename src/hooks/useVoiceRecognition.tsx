
import { useState, useEffect, useCallback, useRef } from 'react';

interface VoiceRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (result: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
}

interface UseVoiceRecognitionReturn {
  text: string;
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
  resetText: () => void;
  hasRecognitionSupport: boolean;
  error: string | null;
}

// Define the SpeechRecognition type with browser prefixes
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

// For TypeScript to recognize the window.SpeechRecognition object
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const useVoiceRecognition = ({
  language = 'de-DE',
  continuous = false,
  interimResults = true,
  onResult,
  onError,
}: VoiceRecognitionOptions = {}): UseVoiceRecognitionReturn => {
  const [text, setText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);
  
  // Check if browser supports speech recognition
  const hasRecognitionSupport = !!window.SpeechRecognition || !!window.webkitSpeechRecognition;

  // Initialize speech recognition
  useEffect(() => {
    if (!hasRecognitionSupport) {
      setError('Speech recognition is not supported in this browser.');
      if (onError) onError('Speech recognition is not supported in this browser.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = language;
    recognitionRef.current.continuous = continuous;
    recognitionRef.current.interimResults = interimResults;

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const resultIndex = event.resultIndex;
      const transcript = event.results[resultIndex][0].transcript;
      const isFinal = event.results[resultIndex].isFinal;

      if (isFinal) {
        setText((prev) => prev + ' ' + transcript);
        if (onResult) onResult(transcript, true);
      } else {
        if (onResult) onResult(transcript, false);
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      setError(`Speech recognition error: ${event.error}`);
      if (onError) onError(`Speech recognition error: ${event.error}`);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language, continuous, interimResults, hasRecognitionSupport, onResult, onError]);

  const startListening = useCallback(() => {
    if (hasRecognitionSupport && recognitionRef.current) {
      setText('');
      setError(null);
      
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error('Speech recognition error:', err);
        setError('Failed to start speech recognition');
        setIsListening(false);
      }
    }
  }, [hasRecognitionSupport]);

  const stopListening = useCallback(() => {
    if (hasRecognitionSupport && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [hasRecognitionSupport]);

  const resetText = useCallback(() => {
    setText('');
  }, []);

  return {
    text,
    isListening,
    startListening,
    stopListening,
    resetText,
    hasRecognitionSupport,
    error,
  };
};

export default useVoiceRecognition;
