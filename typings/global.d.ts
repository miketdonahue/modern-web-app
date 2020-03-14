declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';

  const value: {
    [key: string]: DocumentNode;
  };

  export = value;
}

declare module '*.css';
declare module '*.less';
declare module 'assign-deep';
