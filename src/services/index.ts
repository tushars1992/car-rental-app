import { LocationResult } from "@/types";

export async function getData(searchText: string): Promise<LocationResult> {
  const url = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${searchText}`;
  const response = await fetch(url);
  const results: LocationResult = await response.json();
  return results;
}
