import { Link } from "react-router-dom";
// import * as S from "./PublishingIndexStyle";
import { PublishingMenuList } from "./PublishingMenuList";

const thGroup = [
  "no",
  "page name",
  "path",
  "id",
  "start",
  "end",
  "update",
  "version",
  "notice",
];

function Colgroup() {
  return (
    <colgroup>
      <col style={{ width: "3%" }} />
      <col style={{ width: "24%" }} />
      <col style={{ width: "12%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "5%" }} />
      <col style={{ width: "5%" }} />
      <col style={{ width: "5%" }} />
      <col style={{ width: "5%" }} />
      <col style={{ width: "auto" }} />
    </colgroup>
  );
}

function PublishingIndex() {
  return (
    <>
      <Colgroup></Colgroup>
      <thead>
        <tr>
          {thGroup.map((item, index) => {
            return <th key={item}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {PublishingMenuList.map((item, index) => {
          return (
            <tr key={item.id} className={item.main ? "category" : ""}>
              <td>{index + 1}</td>
              <td>{item.subject}</td>
              <td>
                <Link to={item.path} target="_blank" title="새창열림">
                  {item.path}
                </Link>
              </td>
              <td>{item.id}</td>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{item.update}</td>
              <td>{item.ver}</td>
              <td dangerouslySetInnerHTML={{ __html: item.notice }}></td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default PublishingIndex;
