export type Result<TData> = {
    succeeded: boolean;
    errors: string[];
    data?: TData

}
