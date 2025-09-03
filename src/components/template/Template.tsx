import React from "react";

export type TemplateProps = {
  sample: string;
};

export const Template: React.FC<TemplateProps> = (): React.ReactElement => {
  return <div>Template</div>;
};

export default Template;
