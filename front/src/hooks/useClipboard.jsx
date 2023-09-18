import React from 'react'
export const useClipboard = (props) => {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef();
  const resetCopy = React.useRef();

  const onCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref]);

  React.useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(
        () => setCopied(false),
        props?.duration || 3000,
      );
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied, props.duration]);

  return { copied, ref, onCopy };
};