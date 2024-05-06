import { Typography } from "@mui/material";

export type PageHeaderPropType = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderPropType) => {
  return <Typography variant="h1">{title}</Typography>;
};

export default PageHeader;
