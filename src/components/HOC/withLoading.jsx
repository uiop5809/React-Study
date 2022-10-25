import React, { useState, useEffect } from "react";
// HOC 함수를 받아서 함수를 리턴

export default function withLoading(Component) {
  const WidthLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []);

    return loading ? <p>Loading...</p> : <Component {...props} />;
  };
  return WidthLoadingComponent;
}
