import { format } from "date-fns";

const formatDate = (date) => format(date, "dd MMMM, yyyy");

export default formatDate;
