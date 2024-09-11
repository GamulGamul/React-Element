import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const pubMenu = [
  { title: "웹퍼블리싱 목록", path: "/list" },
  { title: "퍼블리싱 팝업", path: "/popup" },
  { title: "퍼블리싱 컴포넌트 목록", path: "/guide" },
  { title: "SVG 목록", path: "/svg" },
  { title: "퍼블리싱 엘리먼트", path: "/el" },
  { title: "퍼블리싱 차트", path: "/chart" },
];

const PublishingHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pubLocation = useLocation();

  useEffect(() => {
    switch (pubLocation.pathname) {
      case "/list":
        setCurrentIndex(0);
        break;
      case "/popup":
        setCurrentIndex(1);
        break;
      case "/guide":
        setCurrentIndex(2);
        break;
      case "/svg":
        setCurrentIndex(3);
        break;
      case "/el":
        setCurrentIndex(4);
        break;
      case "/chart":
        setCurrentIndex(5);
        break;
      default:
        break;
    }
  }, [currentIndex, pubLocation]);

  return (
    <div className="publising-header">
      <ul>
        {pubMenu.map((el, index) => {
          return (
            <li className={currentIndex === index ? "on" : ""} key={el.title}>
              <Link
                to={el.path}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                {el.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PublishingHeader;
