import { App, USER_PREFS } from "../globals";
import { IWebApp } from "../session/interfaces";
import { configure } from "./Framework";

//-------------------------------------
export abstract class ConfigurationFrameworkFactory {
//-------------------------------------
  static instance(): IConfigurationFramework { 
    return configure;
  }
}

//-------------------------------------
export interface IConfigurationFramework {
//-------------------------------------
  /** Framework initialization */
  initialize( version:string|null, cdnDomain:string|null ):Promise<void>;

  readonly Platform:{
      readonly deploymentTag:string;
      readonly cdnDomain:string;
      readonly apps: {
        /** Initialize an app (preload its public conf and i18n) */
        initialize(app:App):Promise<void>;
        /** Load and return the public conf of an app. */
        getPublicConf(app:App):Promise<any>;
        /** Load the i18n of an app. */
        loadI18n(app:App):Promise<void>;
      };
      /** Configured theme. */
      readonly theme:ITheme;
      /** Configured tracking. */
      readonly analytics:{
        /** Get a tracker parameters. */
        parameters<T extends ITrackingParams>(type:TrackingType):Promise<T|undefined>;
        /**
         * Get the XiTi configuration.
         * This method awaits for the session to be be fully loaded.
         * //FIXME refactor xiti configuration
         */
        xiti():Promise<IXitiTrackingParams|undefined>;
        /** Check the status, if something goes wrong. */
        readonly status:AnalyticStatus;
      };
      /** I18n (port from legacy infra-front)*/
      readonly idiom:IIdiom;
      listLanguages():Promise<string[]>;
  }
  readonly School:{
      //apps; -> pinnedApps;
  }
  readonly User:{
    /** User's preferences.*/
    readonly preferences:IUserPreferences;
    /** Legacy option (//FIXME which use ?).*/
    readonly keepOpenOnLogout:boolean;
    /** User's prefered apps. */
    readonly bookmarkedApps:Array<IWebApp>;

    /** Load the user's preferences for the given app. */
    loadAppPrefs(app:App):Promise<any>;
    /** Save the user's preferences for the given app. */
    saveAppPrefs(app:App):Promise<void>;

    loadLanguage():Promise<string>;
    saveLanguage( lang:string ):Promise<void>;
  }
}

export type AnalyticStatus = "void" | "pending" | "ready" | "failed";
export type TrackingType = "matomo" | "internal";
export interface ITrackingParams {
    /** Whitelist of events to track, in the form "app" or "app.eventName" or "*.eventName". */
    trackOnly: string[];
    /** Blacklist of events not to track, in the form "app" or "app.eventName" or "*.eventName". */
    doNotTrack: string[];
    /** Set to true if state changes of the Single Page App need to be tracked. */
    detailApps: boolean;
}
export interface IMatomoTrackingParams extends ITrackingParams {
  url:string;
  siteId: number;
  UserId: string;
  Profile: string;
  School: string;
  Project: string;
}
/** 2021 implementation of XiTi. */
export interface IXitiTrackingParams {
  /** Which property of LIBELLE_SERVICE to use depends on the frontend. */
  LIBELLE_SERVICE: {'default':string} & {[prop:string]: string};
  TYPE: string;
  OUTIL: any;
  STRUCT_ID:	any;
  STRUCT_UAI:	string;
  PROJET: any;
  EXPLOITANT:	any;
  PLATFORME: any;
  ID_PERSO: any;
  PROFILE: any;
  // NOM_PAGE is missing, but has to determined by the frontend.
}

/* 
FIXME Remove old code in comments below, once the 2021 XiTi impl is validated.
The following was ported from themes but NEVER TESTED.

export interface IXitiTrackingParams {
  //Springboard constants
  ID_COLLECTIVITE: number|'';
  ID_PLATEFORME: number|'';
  ID_PROJET: number|'';

  //Structure var
  ID_ETAB: 0|''|{id:number; collectiviteId?:any; plateformeId?:any; projetId?:any;};

  //App vars
  ID_SERVICE: number|'';
  LIB_SERVICE: number|string;
  ENABLE_PROXY?: boolean;

  //User vars
  ID_PERSO: string;
  ID_PROFIL: number;
}
*/

//-------------------------------------
export interface ITheme {
//-------------------------------------
  /** (legacy) Name of the currently active skin (user's choice in /timeline) : "default" by default, or another available name. */
  readonly skinName:string;
  /** (legacy) Name of the currently active theme, derived from a parent which is classified as 1D (panda) or 2D(theme-open-ent). This is a domain-level configurated value. */
  readonly themeName:string;
  /** (legacy) FIXME Seems to be equal to themeName. */
  readonly skin:string;
  /** (legacy) URL to the currently active theme/skin folder. */
  readonly themeUrl:string;
  /** (legacy) URL to the currently active portal.html template. Used in infra-front. */
  readonly portalTemplate: string;
  /** (legacy) URL to the folder containing assets. */
  readonly basePath: string;
  /** (legacy) URL where the user is redirected after logout. */
  readonly logoutCallback: string;
  /** Available skins configuration (also called "overrides"). */
  readonly skins:Array<IThemeConfOverriding>;

  /** Check if the "school degree" of the current theme is 1D ("panda", or an override of it). */
  readonly is1D:boolean;

  /** Check if the "school degree" of the current theme is 2D ("theme-open-ent" or an override of it). */
  readonly is2D:boolean;

  /** Get the theme/skin configuration. */
  getConf( version?:string ): Promise<IThemeConf>;

  /** Await for theme to be fully loaded (skin, overrides, degrees...). */
  onFullyReady():Promise<ITheme>;

  /** Await for skin conf to be loaded. */
  onSkinReady():Promise<ITheme>;

  /** Await for overrides conf to be loaded. */
  onOverrideReady():Promise<IThemeOverrides>;

  /** List available themes. */
  listThemes():Promise<IThemeDesc[]>;

  /** Configure UI with this theme by default. */
  setDefaultTheme( theme:IThemeDesc ):void; // TODO: refactor, move to user's configuration ?

  /** List available skins. */
  listSkins():Promise<IThemeConfOverriding[]>;

  /** Get the help path, which can be dedicated to 1D or 2D. */
  getHelpPath(): Promise<String>;
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
	overriding: Array<IThemeConfOverriding>;
}

//-------------------------------------
export interface IThemeConfOverriding {
//-------------------------------------
  parent: "panda" | "theme-open-ent";
  child: string;
  bootstrapVersion: string;
  skins: Array<string>;
  help: string;
  group?: string;
  edumedia: {
    uri: string;
    pattern: string;
    ignoreSubjects?: Array<string>;
  };
}

export type IThemeOverrides = {
  [app in App]?: string;
};

export type AddBundleCallback = () => void|Promise<void>;
//-------------------------------------
export interface IIdiom {
//-------------------------------------
  translate( key:string ):string;
  addBundlePromise(path:string):Promise<void>;
  addBundle(path:string, callback?:AddBundleCallback):void;
  addTranslations(folder:string, callback?:AddBundleCallback):void;
  addAllTranslations(folders:string[]):Promise<void>;
  addKeys(keys:any):void;
  removeAccents( str:string ):string;
};

export type UserPreferenceKey = typeof USER_PREFS[keyof typeof USER_PREFS]|App;
//-------------------------------------
export interface IUserPreferences {
//-------------------------------------
  data: {[key in UserPreferenceKey]?: any};
  get(key: UserPreferenceKey):any; 
  load(key: UserPreferenceKey, defaultTo?: any): Promise<any>;
  update(key: UserPreferenceKey, data: any): IUserPreferences;
  save(key: UserPreferenceKey): Promise<void>;
};

