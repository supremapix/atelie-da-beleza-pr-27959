import { useEffect, useState } from "react";
import { Users, MousePointerClick, MessageCircle, GraduationCap, BookOpen } from "lucide-react";

const courses = [
  "Micropigmentação",
  "Design de Sobrancelhas",
  "Lash Lifting",
  "Botox",
  "Preenchimento Labial",
  "Estética Facial",
  "Remoção a Laser",
  "Drenagem Linfática",
];

const messageTypes = [
  { text: "clicou no saiba mais agora", icon: MousePointerClick },
  { text: "acabou de entrar em contato", icon: MessageCircle },
  { text: "acabou de fazer uma matrícula", icon: GraduationCap },
  { text: "clicou no curso", icon: BookOpen, useCourse: true },
];

const LiveNotifications = () => {
  const [viewers, setViewers] = useState(() => {
    const options = [8, 12, 22, 36];
    return options[Math.floor(Math.random() * options.length)];
  });
  const [showNotification, setShowNotification] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentIcon, setCurrentIcon] = useState<any>(Users);

  useEffect(() => {
    // Incrementar viewers a cada 10 segundos
    const viewerInterval = setInterval(() => {
      setViewers((prev) => prev + 3);
    }, 10000);

    return () => clearInterval(viewerInterval);
  }, []);

  useEffect(() => {
    // Mostrar notificação a cada 8-15 segundos
    const showNotificationInterval = setInterval(() => {
      const randomMessage = messageTypes[Math.floor(Math.random() * messageTypes.length)];
      const randomCourse = courses[Math.floor(Math.random() * courses.length)];
      
      let message = "";
      if (randomMessage.useCourse) {
        message = `Alguém ${randomMessage.text} ${randomCourse}`;
      } else {
        message = `Alguém ${randomMessage.text}`;
      }

      setCurrentMessage(message);
      setCurrentIcon(randomMessage.icon);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(showNotificationInterval);
  }, []);

  return (
    <>
      {/* Viewer Counter - Bottom LEFT */}
      <div className="fixed bottom-16 md:bottom-20 left-3 md:left-6 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2 border border-primary/20 animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Users className="w-4 h-4 text-primary" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <div className="text-xs">
            <span className="font-bold text-foreground">{viewers}</span>
            <span className="text-muted-foreground ml-1">online</span>
          </div>
        </div>
      </div>

      {/* Activity Notifications - Bottom LEFT */}
      {showNotification && (
        <div className="fixed bottom-4 md:bottom-6 left-3 md:left-6 z-40 animate-scale-in max-w-[200px] md:max-w-[250px]">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2.5 border border-primary/20">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-full flex-shrink-0">
                {(() => {
                  const IconComponent = currentIcon;
                  return <IconComponent className="w-4 h-4 text-primary" />;
                })()}
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight">{currentMessage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveNotifications;
