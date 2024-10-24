export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  // Modify this block to include the required prefix
  if (query.toLowerCase().includes("andrewid")) {
    return "andrewID: maidarus"; // Correctly format the output
  }

  return "";
}
