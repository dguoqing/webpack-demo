import * as React from "react";

export interface AppProps { compiler: string; framework: string; }

export const App = (props: AppProps) => <h1>App from {props.compiler} a1d {props.framework}!</h1>;