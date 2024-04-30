import Store, { Schema } from "electron-store";

export interface UploadStatusStore {
    /**
     * The collection to which we're uploading, or the root collection.
     *
     * Not all pending uploads will have an associated collection.
     */
    collectionName: string | undefined;
    /**
     * Paths to regular files that are pending upload.
     *
     * This should generally be present, albeit empty, but it is marked optional
     * in sympathy with its siblings.
     */
    filePaths: string[] | undefined;
    /**
     * Each item is the path to a zip file and the name of an entry within it.
     *
     * This is marked optional since legacy stores will not have it.
     */
    zipItems: [zipPath: string, entryName: string][] | undefined;
    /**
     * @deprecated Legacy paths to zip files, now subsumed into zipItems.
     */
    zipPaths: string[] | undefined;
}

const uploadStatusSchema: Schema<UploadStatusStore> = {
    collectionName: {
        type: "string",
    },
    filePaths: {
        type: "array",
        items: {
            type: "string",
        },
    },
    zipItems: {
        type: "array",
        items: {
            type: "array",
            items: {
                type: "string",
            },
        },
    },
    zipPaths: {
        type: "array",
        items: {
            type: "string",
        },
    },
};

export const uploadStatusStore = new Store({
    name: "upload-status",
    schema: uploadStatusSchema,
});
