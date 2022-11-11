import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <Grid
        height="80"
        width="80"
        color="#2196f3"
        ariaLabel="grid-loading"
        radius="12.5"
      />
    </div>
  );
}
