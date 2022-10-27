import React, { useCallback } from "react";
import CommentItem from "./CommentItem.jsx";

export default function Comments({ commentList }) {
  // Comments가 리렌더링 되지 않기 위해 useCallback 사용 (메모이제이션됨)
  const handleClick = useCallback(() => {
    console.log("눌림");
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
