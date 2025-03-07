
import React, { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ConversationInputProps {
  onSendMessage: (message: string) => void;
}

const ConversationInput: React.FC<ConversationInputProps> = ({ onSendMessage }) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <CardFooter>
      <div className="flex w-full items-center space-x-2">
        <Textarea
          placeholder={t("scenario.type_message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button 
          size="icon" 
          onClick={handleSendMessage}
          className="touch-action-manipulation"
          aria-label={t("common.send")}
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">{t("common.send")}</span>
        </Button>
      </div>
    </CardFooter>
  );
};

export default ConversationInput;
