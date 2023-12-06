// react-scroll.js

export const Link = ({ to, spy, smooth, children }) => (
    <a
      href={`#${to}`}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(to);
        const scrollOptions = { top: element.offsetTop, behavior: smooth ? 'smooth' : 'auto' };
        window.scrollTo(scrollOptions);
  
        if (spy) {
          const scrollEvent = new Event('scroll');
          Object.defineProperty(scrollEvent, 'target', { value: window });
          window.dispatchEvent(scrollEvent);
        }
      }}
    >
      {children}
    </a>
  );
  