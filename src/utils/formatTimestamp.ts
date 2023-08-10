import { DEFAULT_LANGUAGE } from "@constants/index";

type FormatTimestampProps = {
  timestamp: number;
  language?: string;
  options?: Intl.DateTimeFormatOptions;
};

export const formatTimestamp = ({
  timestamp,
  language = DEFAULT_LANGUAGE,
  options = {
    year: "numeric",
    month: "long",
  },
}: FormatTimestampProps) => {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat(language, options).format(date);
};
