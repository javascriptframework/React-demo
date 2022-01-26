import React, { useState, useEffect } from 'react';

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title= title;
    }, [title]);
}

function CustomHook() {
    const [count, setCount] = useState(0);
    const title = `You clicked ${count} times`;
    useDocumentTitle(title);
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}

export default CustomHook;