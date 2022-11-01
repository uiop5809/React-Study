/** @jsxImportSource @emotion/react */
import { css, Global, keyframes, ClassNames } from "@emotion/react";
import styled from "@emotion/styled";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

let SomeComponent = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function Emotion() {
  return (
    <>
      <Global
        styles={css`
          p {
            color: hotpink !important;
          }
        `}
      />
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
      <p>Hello, world!</p>

      <div
        css={css`
          animation: ${bounce} 3s ease infinite;
        `}
      >
        some bouncing text!
      </div>

      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent
            wrapperClassName={css({ color: "green" })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent>
        )}
      </ClassNames>
    </>
  );
}
