/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Collection,
  IIIFResource,
} from 'manifesto.js';

export namespace Components {
  interface IiifExplorer {
    'manifest': string;
    'pageSize': number;
    'pagingEnabled': boolean;
    'pagingLimitKey': string;
    'pagingStartKey': string;
    'upLevelEnabled': boolean;
  }
  interface IiifExplorerBreadcrumb {
    'collection': Collection;
    'open': boolean;
  }
  interface IiifExplorerItem {
    'item': IIIFResource;
    'selected': boolean;
  }
}

declare global {


  interface HTMLIiifExplorerElement extends Components.IiifExplorer, HTMLStencilElement {}
  var HTMLIiifExplorerElement: {
    prototype: HTMLIiifExplorerElement;
    new (): HTMLIiifExplorerElement;
  };

  interface HTMLIiifExplorerBreadcrumbElement extends Components.IiifExplorerBreadcrumb, HTMLStencilElement {}
  var HTMLIiifExplorerBreadcrumbElement: {
    prototype: HTMLIiifExplorerBreadcrumbElement;
    new (): HTMLIiifExplorerBreadcrumbElement;
  };

  interface HTMLIiifExplorerItemElement extends Components.IiifExplorerItem, HTMLStencilElement {}
  var HTMLIiifExplorerItemElement: {
    prototype: HTMLIiifExplorerItemElement;
    new (): HTMLIiifExplorerItemElement;
  };
  interface HTMLElementTagNameMap {
    'iiif-explorer': HTMLIiifExplorerElement;
    'iiif-explorer-breadcrumb': HTMLIiifExplorerBreadcrumbElement;
    'iiif-explorer-item': HTMLIiifExplorerItemElement;
  }
}

declare namespace LocalJSX {
  interface IiifExplorer {
    'manifest'?: string;
    'onSelectCollection'?: (event: CustomEvent<any>) => void;
    'onSelectManifest'?: (event: CustomEvent<any>) => void;
    'onUpLevel'?: (event: CustomEvent<any>) => void;
    'pageSize'?: number;
    'pagingEnabled'?: boolean;
    'pagingLimitKey'?: string;
    'pagingStartKey'?: string;
    'upLevelEnabled'?: boolean;
  }
  interface IiifExplorerBreadcrumb {
    'collection'?: Collection;
    'onSelectBreadcrumb'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
  }
  interface IiifExplorerItem {
    'item'?: IIIFResource;
    'onSelectItem'?: (event: CustomEvent<any>) => void;
    'selected'?: boolean;
  }

  interface IntrinsicElements {
    'iiif-explorer': IiifExplorer;
    'iiif-explorer-breadcrumb': IiifExplorerBreadcrumb;
    'iiif-explorer-item': IiifExplorerItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'iiif-explorer': LocalJSX.IiifExplorer & JSXBase.HTMLAttributes<HTMLIiifExplorerElement>;
      'iiif-explorer-breadcrumb': LocalJSX.IiifExplorerBreadcrumb & JSXBase.HTMLAttributes<HTMLIiifExplorerBreadcrumbElement>;
      'iiif-explorer-item': LocalJSX.IiifExplorerItem & JSXBase.HTMLAttributes<HTMLIiifExplorerItemElement>;
    }
  }
}


