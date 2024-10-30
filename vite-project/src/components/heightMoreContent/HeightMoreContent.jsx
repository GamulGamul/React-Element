import React, { useState, useRef, useEffect } from "react";

const HeightMoreContent = () => {
  const [showMore, setShowMore] = useState(false);
  const moreRef = useRef(null);

  const handleToggleContent = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore && moreRef.current) {
      moreRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        moreRef.current.focus();
      }, 300);
    }
  }, [showMore]);

  return (
    <div>
      <div
        className="content"
        style={{
          maxHeight: showMore ? "none" : "100vh", // 디바이스 높이까지만 보여줌
          overflow: showMore ? "visible" : "hidden",
        }}
      >
        <button onClick={handleToggleContent}>
          {showMore ? "간략히 보기" : "더 보기"}
        </button>
        {/* 긴 컨텐츠 내용 */}
        <p>
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          이곳에 긴<br />
          텍스트 또는 콘텐츠가 들어갑니다...
        </p>
      </div>

      {showMore && (
        <div className="more-wrap" ref={moreRef} tabIndex="-1">
          <p>추가 컨텐츠 부분입니다.</p>
        </div>
      )}
    </div>
  );
};

export default HeightMoreContent;
