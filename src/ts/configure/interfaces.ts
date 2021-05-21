import { configure } from "./Framework";

//-------------------------------------
export abstract class ConfigurationFrameworkFactory {
//-------------------------------------
  static readonly instance: IConfigurationFramework = configure;
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  initialize( version:string|null, cdnDomain:string|null ):void;
  readonly Platform:{
      readonly deploymentTag:string;
      readonly cdnDomain:string;
      readonly theme:ITheme;
      //analytics;
      readonly idiom:IIdiom;
      //widgets;
  }
  readonly School:{
      //widgets;
      //apps; -> pinnedApps;
  }
  readonly User:{
    readonly preferences:IUserPreferences;
    readonly keepOpenOnLogout:boolean;
  }
}

//-------------------------------------
export interface ITheme {
//-------------------------------------
  readonly skinName:string;
  readonly themeName:string;
  readonly skin:string;
  readonly themeUrl:string;
  readonly portalTemplate: string;
  readonly basePath: string;
  readonly logoutCallback: string;
/* FIXME faire le tri
listThemes():Promise<Array<IThemeDesc>>;
setTheme( themeDesc:IThemeDesc ):Promise<void>;
skins: [];
pickSkin: boolean;
themeConf: undefined,
themeConfPromise: Promise<void>;
listSkins(): Promise<any>;
getHelpPath(): Promise<String>;
*/
  getConf( version?:string ): Promise<IThemeConf>;
  onSkinReady():Promise<ITheme>;
}

//-------------------------------------
export interface IThemeDesc {
//-------------------------------------
  _id: string;
  displayName: string;
  path: string;
}

//-------------------------------------
export interface IThemeConf {
//-------------------------------------
	dependencies: {
		themes: { [name:string]:/*pathRegex*/string };
		widgets: { [name:string]:/*pathRegex*/string };
	},
	emitWrapper: boolean,
	overriding: Array<{
		edumedia: string;
		parent: string;
		child: string;
		bootstrapVersion: string;
		skins: string;
		help: string;
	}>
}

export type AddBundleCallback = () => void|Promise<void>;
//-------------------------------------
export interface IIdiom {
//-------------------------------------
  translate( key:string ):string;
  addBundlePromise(path:string):Promise<void>;
  addBundle(path:string, callback?:AddBundleCallback):void;
  addTranslations(folder:string, callback?:AddBundleCallback):void;
  addKeys(keys:any):void;
  removeAccents( str:string ):string;
}

//-------------------------------------
export interface IUserPreferences {
//-------------------------------------
  [pref:string]: any;
  update( pref:string, data:any ):IUserPreferences;
  save( key:string ):Promise<void>
}
