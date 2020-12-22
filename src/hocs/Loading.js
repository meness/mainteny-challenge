import { css } from "@emotion/react";
import { Component } from "react";
import { PuffLoader } from "react-spinners";

const puffLoaderCSS = css`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;

/**
 * Add loading ability to components.
 *
 * @param {Component} Component
 */
function withLoading(Component) {
  return function handleLoading({ loading, ...props }) {
    if (!loading) return <Component {...props} />;
    return <PuffLoader size={50} color={"#123abc"} loading css={puffLoaderCSS} />;
  };
}

export default withLoading;
