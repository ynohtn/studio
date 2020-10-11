// import { useState, useEffect } from 'react'
// import cn from 'classnames/bind'
// import styles from './styles.module.scss'

// let cx = cn.bind(styles);

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };

// const Cursor = () => {
//   if (typeof navigator !== "undefined" && isMobile()) return null;

//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [clicked, setClicked] = useState(false);
//   const [linkHovered, setLinkHovered] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     addEventListeners();
//     handleLinkHoverEvents();
//     return () => removeEventListeners();
//   }, []);

//   const addEventListeners = () => {
//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);
//     document.addEventListener("mousedown", onMouseDown);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseenter", onMouseEnter);
//     document.removeEventListener("mouseleave", onMouseLeave);
//     document.removeEventListener("mousedown", onMouseDown);
//     document.removeEventListener("mouseup", onMouseUp);
//   };

//   const onMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseDown = () => {
//     setClicked(true);
//   };

//   const onMouseUp = () => {
//     setClicked(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//     console.log('hidden true')
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const handleLinkHoverEvents = () => {
//     document.querySelectorAll("a").forEach((el) => {
//       el.addEventListener("mouseenter", () => setLinkHovered(true));
//       el.addEventListener("mouseleave", () => setLinkHovered(false));
//     });
//   };

//   const cursorClasses = cx("cursor", {
//     "cursor--clicked": clicked,
//     "cursor--hidden": hidden,
//     "cursor--link-hovered": linkHovered
//   });

//   return (
//     <div
//       className={cursorClasses}
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     />
//   );
// };

// export default Cursor
