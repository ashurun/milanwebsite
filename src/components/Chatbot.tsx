import { useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Milan Label. How can I help you today? I can answer questions about our products, services, or help you request a quote.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', collected: false });
  const [awaitingEmail, setAwaitingEmail] = useState(false);

  const quickReplies = [
    'Request a Quote',
    'Product Information',
    'Contact Sales',
    'Delivery Time',
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('quote') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "I'd be happy to help you get a quote! Please share your requirements (product type, quantity, specifications) and I'll connect you with our sales team. Alternatively, you can fill out our contact form or call us at +91 98765 43210.";
    }

    if (lowerMessage.includes('product') || lowerMessage.includes('label') || lowerMessage.includes('sticker')) {
      return "We offer a wide range of products:\n\n• Product Labels (FMCG, Pharma, Cosmetics)\n• Industrial Stickers & Barcodes\n• Custom Packaging Solutions\n• Security Labels & Holograms\n\nWhich product category interests you?";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('sales') || lowerMessage.includes('talk')) {
      return "You can reach our sales team through:\n\n📞 Phone: +91 98765 43210\n📧 Email: sales@milanlabel.com\n\nOr share your contact details and we'll call you back within 24 hours!";
    }

    if (lowerMessage.includes('delivery') || lowerMessage.includes('time') || lowerMessage.includes('shipping')) {
      return "Our typical delivery times are:\n\n• Standard orders: 7-10 business days\n• Urgent orders: 3-5 business days\n• Custom projects: 2-3 weeks\n\nWe deliver pan-India and can arrange international shipping on request.";
    }

    if (lowerMessage.includes('material') || lowerMessage.includes('paper') || lowerMessage.includes('vinyl')) {
      return "We work with various materials:\n\n• Paper & Thermal Paper\n• PP (Polypropylene)\n• PET & BOPP\n• Vinyl & Polyester\n• Specialty substrates\n\nEach material has specific properties. Would you like me to help you choose the right one?";
    }

    return "Thank you for your message! For detailed assistance, please share your query and contact details, or reach us directly at info@milanlabel.com. Our team will respond within 24 hours.";
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Check if this is an email response
    if (awaitingEmail && inputValue.includes('@')) {
      setUserInfo((prev) => ({ ...prev, email: inputValue, collected: true }));
      setAwaitingEmail(false);
      
      // Simulate sending to email
      setTimeout(() => {
        setIsTyping(false);
        const botResponse: Message = {
          id: messages.length + 2,
          text: `Thank you! I've noted your email (${inputValue}). Your query has been sent to our team. They'll reach out to you within 24 hours. Is there anything else I can help you with?`,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        
        toast({
          title: "Query Submitted!",
          description: "Our team will contact you soon.",
        });
      }, 1500);
      return;
    }

    // Check if we should collect email
    const needsEmail = inputValue.toLowerCase().includes('quote') || 
                       inputValue.toLowerCase().includes('contact') ||
                       inputValue.toLowerCase().includes('call');

    setTimeout(() => {
      setIsTyping(false);
      let responseText = getBotResponse(inputValue);
      
      if (needsEmail && !userInfo.collected) {
        responseText += "\n\nPlease share your email address so we can follow up with you.";
        setAwaitingEmail(true);
      }

      const botResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000 + Math.random() * 500);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-destructive rounded-full animate-pulse" />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Milan Label Support</h3>
              <p className="text-xs opacity-80">Usually replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                {message.sender === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>
              <div
                className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-muted text-foreground rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-muted p-3 rounded-2xl rounded-bl-none">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1"
            />
            <Button size="icon" onClick={handleSend} disabled={!inputValue.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
