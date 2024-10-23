import { useEffect, useState } from "react"

export const useActiveSection = () => {

  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const handleScroll = (e: Event) => {

      const mainElement = document.querySelector('main');

      if (!mainElement) return;

      const sections = document.querySelectorAll('section');
      const scrollPosition = mainElement?.scrollTop;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    const mainElement = document.querySelector('main');

    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return activeSection;
}