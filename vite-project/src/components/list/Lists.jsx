import styled from "@emotion/styled";
import List from "./List";
import { useEffect, useState } from "react";

const Lists = ({ thumList }) => {
  const [limit, setLimit] = useState();

  const getLimit = () => {
    const PC = 8;
    const TABLET = 6;
    const width = window.innerWidth;

    if (width < 1200) {
      return TABLET;
    } else {
      return PC;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setLimit(getLimit());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [limit]);

  const fiterThumList = () => thumList.filter((_, index) => index <= limit);

  const resizeThumList = fiterThumList();

  const Lists = styled.div`
    .thum-list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
      padding: 0 60px;
      > li {
        min-width: 200px;
      }

      .img-wrap {
        img {
          width: 100%;
        }
      }

      figcaption {
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
  `;
  return (
    <Lists>
      <ul className="thum-list">
        {resizeThumList.map((list) => {
          return (
            <li key={list.id}>
              <List list={list} />
            </li>
          );
        })}
      </ul>
    </Lists>
  );
};
export default Lists;
