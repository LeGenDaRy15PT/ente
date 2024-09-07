import { SearchResultSummary } from "@/new/photos/services/search/types";
import { Typography } from "@mui/material";
import { CollectionInfo } from "components/Collections/CollectionInfo";
import { CollectionInfoBarWrapper } from "components/Collections/styledComponents";
import { t } from "i18next";

interface Iprops {
    searchResultSummary: SearchResultSummary;
}
export default function SearchResultInfo({ searchResultSummary }: Iprops) {
    if (!searchResultSummary) {
        return <></>;
    }

    const { optionName, fileCount } = searchResultSummary;

    return (
        <CollectionInfoBarWrapper>
            <Typography color="text.muted" variant="large">
                {t("search_results")}
            </Typography>
            <CollectionInfo name={optionName} fileCount={fileCount} />
        </CollectionInfoBarWrapper>
    );
}
