export enum ERoutes{
	MAIN = "main",
	PROFILE = "profile",
}

export interface IRoutes {
	[key: string] : () => string
	//title: () => string
	// title: string
}