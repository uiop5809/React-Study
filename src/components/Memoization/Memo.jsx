import React, { useState, useEffect } from "react";
import Comments from "./Comments.jsx";
// 특정한 값을 메모이제이션할 땐 useMemo
// 특정 함수를 메모이제이션할 땐 useCallback

const commentList = [
  { title: "comment1", content: "message1", likes: 1 },
  { title: "comment2", content: "message2", likes: 1 },
  { title: "comment3", content: "message3", likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments((prevComments) => [
        ...prevComments,
        {
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Comments commentList={comments} />;
    </div>
  );
}
