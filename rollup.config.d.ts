declare var _default: (
    | {
          input: string;
          output: {
              file: string;
              format: string;
              sourcemap: boolean;
          }[];
          plugins: any[];
          external?: undefined;
      }
    | {
          external: string[];
          input: string;
          output: {
              banner: string;
              file: string;
              format: string;
              sourcemap: boolean;
          }[];
          plugins: any[];
      }
)[];
export default _default;
