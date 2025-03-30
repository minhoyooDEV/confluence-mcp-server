/* eslint-disable @typescript-eslint/ban-types */
import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

type Content = {
  id?: string | undefined;
  type: string;
  status: string;
  title?: string | undefined;
  space?: Space | undefined;
  history?: ContentHistory | undefined;
  version?: Version | undefined;
  ancestors?: (Array<Content> | null) | undefined;
  operations?: Array<OperationCheckResult> | undefined;
  children?: ContentChildren | undefined;
  childTypes?: ContentChildType | undefined;
  descendants?: ContentChildren | undefined;
  container?: Container | undefined;
  body?:
    | Partial<{
        view: ContentBody;
        export_view: ContentBody;
        styled_view: ContentBody;
        storage: ContentBody;
        wiki: ContentBody;
        editor: ContentBody;
        editor2: ContentBody;
        anonymous_export_view: ContentBody;
        atlas_doc_format: ContentBody;
        dynamic: ContentBody;
        raw: ContentBody;
        _expandable: Partial<{
          editor: string;
          view: string;
          export_view: string;
          styled_view: string;
          storage: string;
          editor2: string;
          anonymous_export_view: string;
          atlas_doc_format: string;
          wiki: string;
          dynamic: string;
          raw: string;
        }>;
      }>
    | undefined;
  restrictions?:
    | Partial<{
        read: ContentRestriction;
        update: ContentRestriction;
        _expandable: Partial<{
          read: string;
          update: string;
        }>;
        _links: GenericLinks;
      }>
    | undefined;
  metadata?: ContentMetadata | undefined;
  macroRenderedOutput?: {} | undefined;
  extensions?: {} | undefined;
  _expandable?:
    | Partial<{
        childTypes: string;
        container: string;
        metadata: string;
        operations: string;
        children: string;
        restrictions: string;
        history: string;
        ancestors: string;
        body: string;
        version: string;
        descendants: string;
        space: string;
        extensions: string;
        schedulePublishDate: string;
        schedulePublishInfo: string;
        macroRenderedOutput: string;
      }>
    | undefined;
  _links?: GenericLinks | undefined;
} & {
  [key: string]: any;
};
type Icon = {
  path: string;
  width: number;
  height: number;
  isDefault: boolean;
} | null;
type SpaceDescription = {
  value: string;
  representation: 'plain' | 'view';
  embeddedContent: Array<Partial<NonNullable<unknown>>>;
} & {
  [key: string]: any;
};
type LabelArray = {
  results: Array<Label>;
  start?: number | undefined;
  limit?: number | undefined;
  size: number;
  _links?: GenericLinks | undefined;
};
type Label = {
  prefix: string;
  name: string;
  id: string;
  label: string;
};
type GenericLinks = {};
type OperationCheckResult = {
  operation:
    | 'administer'
    | 'archive'
    | 'clear_permissions'
    | 'copy'
    | 'create'
    | 'create_space'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'restrict_content'
    | 'update'
    | 'use';
  targetType: string;
};
type GenericUserName = string | null;
type GenericUserKey = string | null;
type GenericAccountId = string | null;
type UserDetails = Partial<{
  business: Partial<{
    position: string;
    department: string;
    location: string;
  }>;
  personal: Partial<{
    phone: string;
    im: string;
    website: string;
    email: string;
  }>;
}>;
type SpaceSettings = {
  routeOverrideEnabled: boolean;
  editor?:
    | {
        page: string;
        blogpost: string;
        default: string;
      }
    | undefined;
  spaceKey?: string | undefined;
  _links: GenericLinks;
};
type Theme = {
  themeKey: string;
  name?: string | undefined;
  description?: string | undefined;
  icon?: Icon | undefined;
  _links?: GenericLinks | undefined;
};
type LookAndFeel = {
  headings: {
    color: string;
  };
  links: {
    color: string;
  };
  menus: MenusLookAndFeel;
  header: HeaderLookAndFeel;
  horizontalHeader?: HorizontalHeaderLookAndFeel | undefined;
  content: ContentLookAndFeel;
  bordersAndDividers: {
    color: string;
  };
  spaceReference?: {} | undefined;
};
type MenusLookAndFeel = {
  hoverOrFocus: {
    backgroundColor: string;
  };
  color: string;
};
type HeaderLookAndFeel = {
  backgroundColor: string;
  button: ButtonLookAndFeel;
  primaryNavigation: NavigationLookAndFeel;
  secondaryNavigation: NavigationLookAndFeel;
  search: SearchFieldLookAndFeel;
};
type ButtonLookAndFeel = {
  backgroundColor: string;
  color: string;
} | null;
type NavigationLookAndFeel = {
  color: string;
  highlightColor?: (string | null) | undefined;
  hoverOrFocus: {
    backgroundColor: string;
    color: string;
  };
} | null;
type SearchFieldLookAndFeel = {
  backgroundColor: string;
  color: string;
};
type HorizontalHeaderLookAndFeel = {
  backgroundColor: string;
  button?: ButtonLookAndFeel | undefined;
  primaryNavigation: TopNavigationLookAndFeel;
  secondaryNavigation?: NavigationLookAndFeel | undefined;
  search?: SearchFieldLookAndFeel | undefined;
};
type TopNavigationLookAndFeel = {
  color?: (string | null) | undefined;
  highlightColor: string;
  hoverOrFocus?:
    | Partial<{
        backgroundColor: string;
        color: string;
      }>
    | undefined;
};
type ContentLookAndFeel = Partial<{
  screen: ScreenLookAndFeel;
  container: ContainerLookAndFeel;
  header: ContainerLookAndFeel;
  body: ContainerLookAndFeel;
}>;
type ScreenLookAndFeel = {
  background: string;
  backgroundAttachment?: (string | null) | undefined;
  backgroundBlendMode?: (string | null) | undefined;
  backgroundClip?: (string | null) | undefined;
  backgroundColor?: (string | null) | undefined;
  backgroundImage?: (string | null) | undefined;
  backgroundOrigin?: (string | null) | undefined;
  backgroundPosition?: (string | null) | undefined;
  backgroundRepeat?: (string | null) | undefined;
  backgroundSize?: (string | null) | undefined;
  layer?:
    | Partial<{
        width: string;
        height: string;
      }>
    | undefined;
  gutterTop?: (string | null) | undefined;
  gutterRight?: (string | null) | undefined;
  gutterBottom?: (string | null) | undefined;
  gutterLeft?: (string | null) | undefined;
};
type ContainerLookAndFeel = {
  background: string;
  backgroundAttachment?: (string | null) | undefined;
  backgroundBlendMode?: (string | null) | undefined;
  backgroundClip?: (string | null) | undefined;
  backgroundColor: string | null;
  backgroundImage: string | null;
  backgroundOrigin?: (string | null) | undefined;
  backgroundPosition?: (string | null) | undefined;
  backgroundRepeat?: (string | null) | undefined;
  backgroundSize: string | null;
  padding: string;
  borderRadius: string;
};
type Group = {
  type: 'group';
  name: string;
  id: string;
  _links?: GenericLinks | undefined;
};
type ContentChildType = Partial<
  {
    attachment: {
      value: boolean;
      _links: GenericLinks;
    };
    comment: {
      value: boolean;
      _links: GenericLinks;
    };
    page: {
      value: boolean;
      _links: GenericLinks;
    };
    _expandable: Partial<{
      all: string;
      attachment: string;
      comment: string;
      page: string;
      whiteboard: string;
      database: string;
      embed: string;
      folder: string;
    }>;
  } & {
    [key: string]: any;
  }
>;
type Container = {};
type ContentBody = {
  value: string;
  representation:
    | 'view'
    | 'export_view'
    | 'styled_view'
    | 'storage'
    | 'editor'
    | 'editor2'
    | 'anonymous_export_view'
    | 'wiki'
    | 'atlas_doc_format'
    | 'raw';
  embeddedContent?: Array<EmbeddedContent> | undefined;
  webresource?: WebResourceDependencies | undefined;
  mediaToken?:
    | Partial<{
        collectionIds: Array<string>;
        contentId: string;
        expiryDateTime: string;
        fileIds: Array<string>;
        token: string;
      }>
    | undefined;
  _expandable?:
    | Partial<{
        content: string;
        embeddedContent: string;
        webresource: string;
        mediaToken: string;
      }>
    | undefined;
  _links?: GenericLinks | undefined;
};
type EmbeddedContent = Partial<
  {
    entityId: number;
    entityType: string;
    entity: Embeddable;
  } & {
    [key: string]: any;
  }
>;
type Embeddable = {};
type WebResourceDependencies = Partial<{
  _expandable: Partial<
    {
      uris: string | {};
    } & {
      [key: string]: any;
    }
  >;
  keys: Array<string>;
  contexts: Array<string>;
  uris: Partial<{
    all: Array<string> | string;
    css: Array<string> | string;
    js: Array<string> | string;
    _expandable: Partial<
      {
        css: Array<string> | string;
        js: Array<string> | string;
      } & {
        [key: string]: any;
      }
    >;
  }>;
  tags: Partial<{
    all: string;
    css: string;
    data: string;
    js: string;
    _expandable: {};
  }>;
  superbatch: SuperBatchWebResources;
}>;
type SuperBatchWebResources = Partial<{
  uris: Partial<{
    all: Array<string> | string;
    css: Array<string> | string;
    js: Array<string> | string;
  }>;
  tags: Partial<{
    all: string;
    css: string;
    data: string;
    js: string;
  }>;
  metatags: string;
  _expandable: {};
}>;
type GroupArray = {
  results: Array<Group>;
  start: number;
  limit: number;
  size: number;
};
type ContentArray = {
  results: Array<Content>;
  start?: number | undefined;
  limit?: number | undefined;
  size: number;
  _links: GenericLinks;
};
type ContentChildren = Partial<
  {
    attachment: ContentArray;
    comment: ContentArray;
    page: ContentArray;
    whiteboard: ContentArray;
    database: ContentArray;
    embed: ContentArray;
    folder: ContentArray;
    _expandable: Partial<
      {
        attachment: string;
        comment: string;
        page: string;
        whiteboard: string;
        database: string;
        embed: string;
        folder: string;
      } & {
        [key: string]: any;
      }
    >;
    _links: GenericLinks;
  } & {
    [key: string]: any;
  }
>;
type ContentHistory = {
  latest: boolean;
  createdBy?: User | undefined;
  ownedBy?: User | undefined;
  lastOwnedBy?: User | undefined;
  createdDate?: string | undefined;
  lastUpdated?: Version | undefined;
  previousVersion?: Version | undefined;
  contributors?:
    | Partial<{
        publishers: UsersUserKeys;
      }>
    | undefined;
  nextVersion?: Version | undefined;
  _expandable?:
    | Partial<{
        lastUpdated: string;
        previousVersion: string;
        contributors: string;
        nextVersion: string;
        ownedBy: string;
        lastOwnedBy: string;
      }>
    | undefined;
  _links?: GenericLinks | undefined;
};
type ContentMetadata = Partial<
  {
    currentuser: Partial<{
      favourited: Partial<{
        isFavourite: boolean;
        favouritedDate: string;
      }>;
      lastmodified: Partial<{
        version: Version;
        friendlyLastModified: string;
      }>;
      lastcontributed: Partial<{
        status: string;
        when: string;
      }>;
      viewed: Partial<{
        lastSeen: string;
        friendlyLastSeen: string;
      }>;
      scheduled: {};
      _expandable: Partial<{
        favourited: string;
        lastmodified: string;
        lastcontributed: string;
        viewed: string;
        scheduled: string;
      }>;
    }>;
    properties: GenericLinks;
    frontend: {};
    labels: LabelArray | Array<Label>;
  } & {
    [key: string]: any;
  }
>;
type ContentRestriction = {
  operation:
    | 'administer'
    | 'copy'
    | 'create'
    | 'delete'
    | 'export'
    | 'move'
    | 'purge'
    | 'purge_version'
    | 'read'
    | 'restore'
    | 'update'
    | 'use';
  restrictions?:
    | Partial<{
        user: UserArray;
        group: GroupArray;
        _expandable: Partial<{
          user: string;
          group: string;
        }>;
      }>
    | undefined;
  content?: Content | undefined;
  _expandable: Partial<{
    restrictions: string;
    content: string;
  }>;
  _links: GenericLinks;
};
type Space = {
  id?: number | undefined;
  key: string;
  alias?: string | undefined;
  name: string;
  icon?: Icon | undefined;
  description?:
    | Partial<{
        plain: SpaceDescription;
        view: SpaceDescription;
        _expandable: Partial<{
          view: string;
          plain: string;
        }>;
      }>
    | undefined;
  homepage?: Content | undefined;
  type: string;
  metadata?:
    | Partial<{
        labels: LabelArray;
        _expandable: {};
      }>
    | undefined;
  operations?: Array<OperationCheckResult> | undefined;
  permissions?: Array<SpacePermission> | undefined;
  status: string;
  settings?: SpaceSettings | undefined;
  theme?: Theme | undefined;
  lookAndFeel?: LookAndFeel | undefined;
  history?:
    | {
        createdDate: string;
        createdBy?: User | undefined;
      }
    | undefined;
  _expandable: Partial<{
    settings: string;
    metadata: string;
    operations: string;
    lookAndFeel: string;
    permissions: string;
    icon: string;
    description: string;
    theme: string;
    history: string;
    homepage: string;
    identifiers: string;
  }>;
  _links: GenericLinks;
};
type SpacePermission = {
  id?: number | undefined;
  subjects?:
    | Partial<{
        user: {
          results: Array<User>;
          size: number;
          start?: number | undefined;
          limit?: number | undefined;
        };
        group: {
          results: Array<Group>;
          size: number;
          start?: number | undefined;
          limit?: number | undefined;
        };
        _expandable: Partial<{
          user: string;
          group: string;
        }>;
      }>
    | undefined;
  operation: OperationCheckResult;
  anonymousAccess: boolean;
  unlicensedAccess: boolean;
};
type User = {
  type: 'known' | 'unknown' | 'anonymous' | 'user';
  username?: GenericUserName | undefined;
  userKey?: GenericUserKey | undefined;
  accountId?: GenericAccountId | undefined;
  accountType?: ('atlassian' | 'app' | '') | undefined;
  email?: (string | null) | undefined;
  publicName?: string | undefined;
  profilePicture?: Icon | undefined;
  displayName?: (string | null) | undefined;
  timeZone?: (string | null) | undefined;
  externalCollaborator?: boolean | undefined;
  isExternalCollaborator?: boolean | undefined;
  isGuest?: boolean | undefined;
  operations?: (Array<OperationCheckResult> | null) | undefined;
  details?: UserDetails | undefined;
  personalSpace?: Space | undefined;
  _expandable?:
    | Partial<{
        operations: string;
        details: string;
        personalSpace: string;
      }>
    | undefined;
  _links?: GenericLinks | undefined;
} & {
  [key: string]: any;
};
type UserArray = {
  results: Array<User>;
  start?: number | undefined;
  limit?: number | undefined;
  size?: number | undefined;
  totalSize?: number | undefined;
  _links?: GenericLinks | undefined;
};
type UsersUserKeys = {
  users?: Array<User> | undefined;
  userKeys?: Array<string> | undefined;
  _links?: GenericLinks | undefined;
} & {
  [key: string]: any;
};
type Version = {
  by?: User | undefined;
  when: string | null;
  friendlyWhen?: (string | null) | undefined;
  message?: (string | null) | undefined;
  number: number;
  minorEdit: boolean;
  content?: Content | undefined;
  collaborators?: UsersUserKeys | undefined;
  _expandable?:
    | Partial<{
        content: string;
        collaborators: string;
      }>
    | undefined;
  _links?: GenericLinks | undefined;
  contentTypeModified?: boolean | undefined;
  confRev?: (string | null) | undefined;
  syncRev?: (string | null) | undefined;
  syncRevSource?: (string | null) | undefined;
} & {
  [key: string]: any;
};

const GenericUserName = z.string();
const GenericUserKey = z.string();
const GenericAccountId = z.string();
const AffectedObject = z.object({ name: z.string(), objectType: z.string() }).passthrough();
const ChangedValue = z
  .object({
    name: z.string(),
    oldValue: z.string(),
    hiddenOldValue: z.string().optional(),
    newValue: z.string(),
    hiddenNewValue: z.string().optional(),
  })
  .passthrough();
const AuditRecord = z
  .object({
    author: z
      .object({
        type: z.literal('user').default('user'),
        displayName: z.string(),
        operations: z.object({}).partial().passthrough().nullable(),
        username: GenericUserName.nullish(),
        userKey: GenericUserKey.nullish(),
        accountId: GenericAccountId.nullish(),
        accountType: z.string().optional(),
        externalCollaborator: z.boolean().optional(),
        isExternalCollaborator: z.boolean().optional(),
        isGuest: z.boolean().optional(),
        publicName: z.string().optional(),
      })
      .passthrough(),
    remoteAddress: z.string(),
    creationDate: z.number().int(),
    summary: z.string(),
    description: z.string(),
    category: z.string(),
    sysAdmin: z.boolean(),
    superAdmin: z.boolean().optional(),
    affectedObject: AffectedObject,
    changedValues: z.array(ChangedValue),
    associatedObjects: z.array(AffectedObject),
  })
  .passthrough();
const GenericLinks = z.record(z.union([z.object({}).partial().passthrough(), z.string()]));
const AuditRecordArray = z
  .object({
    results: z.array(AuditRecord),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const AuditRecordCreate = z
  .object({
    author: z
      .object({
        type: z.literal('user').default('user'),
        displayName: z.string().optional(),
        operations: z.object({}).partial().passthrough().optional(),
        username: GenericUserName.nullish(),
        userKey: GenericUserKey.nullish(),
      })
      .passthrough()
      .optional(),
    remoteAddress: z.string(),
    creationDate: z.number().int().optional(),
    summary: z.string().optional(),
    description: z.string().optional(),
    category: z.string().optional(),
    sysAdmin: z.boolean().optional().default(false),
    affectedObject: AffectedObject.optional(),
    changedValues: z.array(ChangedValue).optional(),
    associatedObjects: z.array(AffectedObject).optional(),
  })
  .passthrough();
const RetentionPeriod = z
  .object({
    number: z.number().int(),
    units: z.enum([
      'NANOS',
      'MICROS',
      'MILLIS',
      'SECONDS',
      'MINUTES',
      'HOURS',
      'HALF_DAYS',
      'DAYS',
      'WEEKS',
      'MONTHS',
      'YEARS',
      'DECADES',
      'CENTURIES',
      'MILLENNIA',
      'ERAS',
      'FOREVER',
    ]),
  })
  .passthrough();
const archivePages_Body = z
  .object({ pages: z.array(z.object({ id: z.number().int() }).passthrough()) })
  .partial()
  .passthrough();
const LongTask = z
  .object({
    ari: z.string().optional(),
    id: z.string(),
    links: z.object({ status: z.string() }).partial().passthrough(),
  })
  .passthrough();
const ContentBlueprintDraft = z
  .object({
    version: z.object({ number: z.number().int() }).passthrough(),
    title: z.string().max(255),
    type: z.literal('page'),
    status: z.literal('current').optional().default('current'),
    space: z.object({ key: z.string() }).passthrough().optional(),
    ancestors: z.array(z.object({ id: z.string() }).passthrough()).nullish(),
  })
  .passthrough();
const Icon = z
  .object({
    path: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    isDefault: z.boolean(),
  })
  .passthrough();
const SpaceDescription = z
  .object({
    value: z.string(),
    representation: z.enum(['plain', 'view']),
    embeddedContent: z.array(z.object({}).partial().passthrough()),
  })
  .passthrough();
const Label = z
  .object({ prefix: z.string(), name: z.string(), id: z.string(), label: z.string() })
  .passthrough();
const LabelArray = z
  .object({
    results: z.array(Label),
    start: z.number().int().optional(),
    limit: z.number().int().optional(),
    size: z.number().int(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const OperationCheckResult = z
  .object({
    operation: z.enum([
      'administer',
      'archive',
      'clear_permissions',
      'copy',
      'create',
      'create_space',
      'delete',
      'export',
      'move',
      'purge',
      'purge_version',
      'read',
      'restore',
      'restrict_content',
      'update',
      'use',
    ]),
    targetType: z.string(),
  })
  .passthrough();
const UserDetails = z
  .object({
    business: z
      .object({ position: z.string(), department: z.string(), location: z.string() })
      .partial()
      .passthrough(),
    personal: z
      .object({ phone: z.string(), im: z.string(), website: z.string(), email: z.string() })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const User: z.ZodType<User> = z.lazy(() =>
  z
    .object({
      type: z.enum(['known', 'unknown', 'anonymous', 'user']),
      username: GenericUserName.optional(),
      userKey: GenericUserKey.optional(),
      accountId: GenericAccountId.optional(),
      accountType: z.enum(['atlassian', 'app', '']).optional(),
      email: z.string().optional(),
      publicName: z.string().optional(),
      profilePicture: Icon.optional(),
      displayName: z.string().optional(),
      timeZone: z.string().optional(),
      externalCollaborator: z.boolean().optional(),
      isExternalCollaborator: z.boolean().optional(),
      isGuest: z.boolean().optional(),
      operations: z.array(OperationCheckResult).optional(),
      details: UserDetails.optional(),
      personalSpace: Space.optional(),
      _expandable: z
        .object({ operations: z.string(), details: z.string(), personalSpace: z.string() })
        .partial()
        .passthrough()
        .optional(),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
);
const Group = z
  .object({
    type: z.literal('group').default('group'),
    name: z.string(),
    id: z.string(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const SpacePermission: z.ZodType<SpacePermission> = z.lazy(() =>
  z
    .object({
      id: z.number().int().optional(),
      subjects: z
        .object({
          user: z
            .object({
              results: z.array(User),
              size: z.number().int(),
              start: z.number().int().optional(),
              limit: z.number().int().optional(),
            })
            .passthrough(),
          group: z
            .object({
              results: z.array(Group),
              size: z.number().int(),
              start: z.number().int().optional(),
              limit: z.number().int().optional(),
            })
            .passthrough(),
          _expandable: z.object({ user: z.string(), group: z.string() }).partial().passthrough(),
        })
        .partial()
        .passthrough()
        .optional(),
      operation: OperationCheckResult,
      anonymousAccess: z.boolean().default(false),
      unlicensedAccess: z.boolean().default(false),
    })
    .passthrough(),
);
const SpaceSettings = z
  .object({
    routeOverrideEnabled: z.boolean(),
    editor: z
      .object({ page: z.string(), blogpost: z.string(), default: z.string() })
      .passthrough()
      .optional(),
    spaceKey: z.string().optional(),
    _links: GenericLinks,
  })
  .passthrough();
const Theme = z
  .object({
    themeKey: z.string(),
    name: z.string().optional(),
    description: z.string().optional(),
    icon: Icon.nullish(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const MenusLookAndFeel = z
  .object({
    hoverOrFocus: z.object({ backgroundColor: z.string() }).passthrough(),
    color: z.string(),
  })
  .passthrough();
const ButtonLookAndFeel = z
  .object({ backgroundColor: z.string(), color: z.string() })
  .passthrough();
const NavigationLookAndFeel = z
  .object({
    color: z.string(),
    highlightColor: z.string().nullish(),
    hoverOrFocus: z.object({ backgroundColor: z.string(), color: z.string() }).passthrough(),
  })
  .passthrough();
const SearchFieldLookAndFeel = z
  .object({ backgroundColor: z.string(), color: z.string() })
  .passthrough();
const HeaderLookAndFeel = z
  .object({
    backgroundColor: z.string(),
    button: ButtonLookAndFeel.nullable(),
    primaryNavigation: NavigationLookAndFeel.nullable(),
    secondaryNavigation: NavigationLookAndFeel.nullable(),
    search: SearchFieldLookAndFeel.nullable(),
  })
  .passthrough();
const TopNavigationLookAndFeel = z
  .object({
    color: z.string().nullish(),
    highlightColor: z.string(),
    hoverOrFocus: z
      .object({ backgroundColor: z.string(), color: z.string() })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const HorizontalHeaderLookAndFeel = z
  .object({
    backgroundColor: z.string(),
    button: ButtonLookAndFeel.nullish(),
    primaryNavigation: TopNavigationLookAndFeel,
    secondaryNavigation: NavigationLookAndFeel.nullish(),
    search: SearchFieldLookAndFeel.nullish(),
  })
  .passthrough();
const ScreenLookAndFeel = z
  .object({
    background: z.string(),
    backgroundAttachment: z.string().nullish(),
    backgroundBlendMode: z.string().nullish(),
    backgroundClip: z.string().nullish(),
    backgroundColor: z.string().nullish(),
    backgroundImage: z.string().nullish(),
    backgroundOrigin: z.string().nullish(),
    backgroundPosition: z.string().nullish(),
    backgroundRepeat: z.string().nullish(),
    backgroundSize: z.string().nullish(),
    layer: z.object({ width: z.string(), height: z.string() }).partial().passthrough().nullish(),
    gutterTop: z.string().nullish(),
    gutterRight: z.string().nullish(),
    gutterBottom: z.string().nullish(),
    gutterLeft: z.string().nullish(),
  })
  .passthrough();
const ContainerLookAndFeel = z
  .object({
    background: z.string(),
    backgroundAttachment: z.string().nullish(),
    backgroundBlendMode: z.string().nullish(),
    backgroundClip: z.string().nullish(),
    backgroundColor: z.string().nullable(),
    backgroundImage: z.string().nullable(),
    backgroundOrigin: z.string().nullish(),
    backgroundPosition: z.string().nullish(),
    backgroundRepeat: z.string().nullish(),
    backgroundSize: z.string().nullable(),
    padding: z.string(),
    borderRadius: z.string(),
  })
  .passthrough();
const ContentLookAndFeel = z
  .object({
    screen: ScreenLookAndFeel,
    container: ContainerLookAndFeel.nullable(),
    header: ContainerLookAndFeel.nullable(),
    body: ContainerLookAndFeel.nullable(),
  })
  .partial()
  .passthrough();
const LookAndFeel = z
  .object({
    headings: z.object({ color: z.string() }).passthrough(),
    links: z.object({ color: z.string() }).passthrough(),
    menus: MenusLookAndFeel,
    header: HeaderLookAndFeel,
    horizontalHeader: HorizontalHeaderLookAndFeel.optional(),
    content: ContentLookAndFeel,
    bordersAndDividers: z.object({ color: z.string() }).passthrough(),
    spaceReference: z.object({}).partial().passthrough().nullish(),
  })
  .passthrough();
const Space: z.ZodType<Space> = z.lazy(() =>
  z
    .object({
      id: z.number().int().optional(),
      key: z.string(),
      alias: z.string().optional(),
      name: z.string(),
      icon: Icon.optional(),
      description: z
        .object({
          plain: SpaceDescription,
          view: SpaceDescription,
          _expandable: z.object({ view: z.string(), plain: z.string() }).partial().passthrough(),
        })
        .partial()
        .passthrough()
        .optional(),
      homepage: Content.optional(),
      type: z.string(),
      metadata: z
        .object({ labels: LabelArray, _expandable: z.object({}).partial().passthrough() })
        .partial()
        .passthrough()
        .optional(),
      operations: z.array(OperationCheckResult).optional(),
      permissions: z.array(SpacePermission).optional(),
      status: z.string(),
      settings: SpaceSettings.optional(),
      theme: Theme.optional(),
      lookAndFeel: LookAndFeel.optional(),
      history: z
        .object({ createdDate: z.string().datetime({ offset: true }), createdBy: User.optional() })
        .passthrough()
        .optional(),
      _expandable: z
        .object({
          settings: z.string(),
          metadata: z.string(),
          operations: z.string(),
          lookAndFeel: z.string(),
          permissions: z.string(),
          icon: z.string(),
          description: z.string(),
          theme: z.string(),
          history: z.string(),
          homepage: z.string(),
          identifiers: z.string(),
        })
        .partial()
        .passthrough(),
      _links: GenericLinks,
    })
    .passthrough(),
);
const UsersUserKeys: z.ZodType<UsersUserKeys> = z.lazy(() =>
  z
    .object({
      users: z.array(User).optional(),
      userKeys: z.array(z.string()).optional(),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
);
const Version: z.ZodType<Version> = z.lazy(() =>
  z
    .object({
      by: User.optional(),
      when: z.string().datetime({ offset: true }).nullable(),
      friendlyWhen: z.string().nullish(),
      message: z.string().nullish(),
      number: z.number().int(),
      minorEdit: z.boolean(),
      content: Content.optional(),
      collaborators: UsersUserKeys.optional(),
      _expandable: z
        .object({ content: z.string(), collaborators: z.string() })
        .partial()
        .passthrough()
        .optional(),
      _links: GenericLinks.optional(),
      contentTypeModified: z.boolean().optional(),
      confRev: z.string().nullish(),
      syncRev: z.string().nullish(),
      syncRevSource: z.string().nullish(),
    })
    .passthrough(),
);
const ContentHistory: z.ZodType<ContentHistory> = z.lazy(() =>
  z
    .object({
      latest: z.boolean(),
      createdBy: User.optional(),
      ownedBy: User.optional(),
      lastOwnedBy: User.optional(),
      createdDate: z.string().datetime({ offset: true }).optional(),
      lastUpdated: Version.optional(),
      previousVersion: Version.optional(),
      contributors: z
        .object({ publishers: UsersUserKeys.nullable() })
        .partial()
        .passthrough()
        .optional(),
      nextVersion: Version.optional(),
      _expandable: z
        .object({
          lastUpdated: z.string(),
          previousVersion: z.string(),
          contributors: z.string(),
          nextVersion: z.string(),
          ownedBy: z.string(),
          lastOwnedBy: z.string(),
        })
        .partial()
        .passthrough()
        .optional(),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
);
const ContentArray: z.ZodType<ContentArray> = z.lazy(() =>
  z
    .object({
      results: z.array(Content),
      start: z.number().int().optional(),
      limit: z.number().int().optional(),
      size: z.number().int(),
      _links: GenericLinks,
    })
    .passthrough(),
);
const ContentChildren: z.ZodType<ContentChildren> = z.lazy(() =>
  z
    .object({
      attachment: ContentArray,
      comment: ContentArray,
      page: ContentArray,
      whiteboard: ContentArray,
      database: ContentArray,
      embed: ContentArray,
      folder: ContentArray,
      _expandable: z
        .object({
          attachment: z.string(),
          comment: z.string(),
          page: z.string(),
          whiteboard: z.string(),
          database: z.string(),
          embed: z.string(),
          folder: z.string(),
        })
        .partial()
        .passthrough(),
      _links: GenericLinks,
    })
    .partial()
    .passthrough(),
);
const ContentChildType = z
  .object({
    attachment: z.object({ value: z.boolean(), _links: GenericLinks }).passthrough(),
    comment: z.object({ value: z.boolean(), _links: GenericLinks }).passthrough(),
    page: z.object({ value: z.boolean(), _links: GenericLinks }).passthrough(),
    _expandable: z
      .object({
        all: z.string(),
        attachment: z.string(),
        comment: z.string(),
        page: z.string(),
        whiteboard: z.string(),
        database: z.string(),
        embed: z.string(),
        folder: z.string(),
      })
      .partial()
      .passthrough(),
  })
  .partial()
  .passthrough();
const Container = z.object({}).partial().passthrough();
const Embeddable = z.object({}).partial().passthrough();
const EmbeddedContent = z
  .object({ entityId: z.number().int(), entityType: z.string(), entity: Embeddable })
  .partial()
  .passthrough();
const SuperBatchWebResources = z
  .object({
    uris: z
      .object({
        all: z.union([z.array(z.string()), z.string()]),
        css: z.union([z.array(z.string()), z.string()]),
        js: z.union([z.array(z.string()), z.string()]),
      })
      .partial()
      .passthrough(),
    tags: z
      .object({ all: z.string(), css: z.string(), data: z.string(), js: z.string() })
      .partial()
      .passthrough(),
    metatags: z.string(),
    _expandable: z.object({}).partial().passthrough(),
  })
  .partial()
  .passthrough();
const WebResourceDependencies = z
  .object({
    _expandable: z
      .object({ uris: z.union([z.string(), z.object({}).partial().passthrough()]) })
      .partial()
      .passthrough(),
    keys: z.array(z.string()),
    contexts: z.array(z.string()),
    uris: z
      .object({
        all: z.union([z.array(z.string()), z.string()]),
        css: z.union([z.array(z.string()), z.string()]),
        js: z.union([z.array(z.string()), z.string()]),
        _expandable: z
          .object({
            css: z.union([z.array(z.string()), z.string()]),
            js: z.union([z.array(z.string()), z.string()]),
          })
          .partial()
          .passthrough(),
      })
      .partial()
      .passthrough(),
    tags: z
      .object({
        all: z.string(),
        css: z.string(),
        data: z.string(),
        js: z.string(),
        _expandable: z.object({}).partial().passthrough(),
      })
      .partial()
      .passthrough(),
    superbatch: SuperBatchWebResources,
  })
  .partial()
  .passthrough();
const ContentBody = z
  .object({
    value: z.string(),
    representation: z.enum([
      'view',
      'export_view',
      'styled_view',
      'storage',
      'editor',
      'editor2',
      'anonymous_export_view',
      'wiki',
      'atlas_doc_format',
      'raw',
    ]),
    embeddedContent: z.array(EmbeddedContent).optional(),
    webresource: WebResourceDependencies.optional(),
    mediaToken: z
      .object({
        collectionIds: z.array(z.string()),
        contentId: z.string(),
        expiryDateTime: z.string(),
        fileIds: z.array(z.string()),
        token: z.string(),
      })
      .partial()
      .passthrough()
      .optional(),
    _expandable: z
      .object({
        content: z.string(),
        embeddedContent: z.string(),
        webresource: z.string(),
        mediaToken: z.string(),
      })
      .partial()
      .passthrough()
      .optional(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const UserArray: z.ZodType<UserArray> = z.lazy(() =>
  z
    .object({
      results: z.array(User),
      start: z.number().int().optional(),
      limit: z.number().int().optional(),
      size: z.number().int().optional(),
      totalSize: z.number().int().optional().default(0),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
);
const GroupArray = z
  .object({
    results: z.array(Group),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
  })
  .passthrough();
const ContentRestriction: z.ZodType<ContentRestriction> = z.lazy(() =>
  z
    .object({
      operation: z.enum([
        'administer',
        'copy',
        'create',
        'delete',
        'export',
        'move',
        'purge',
        'purge_version',
        'read',
        'restore',
        'update',
        'use',
      ]),
      restrictions: z
        .object({
          user: UserArray,
          group: GroupArray,
          _expandable: z.object({ user: z.string(), group: z.string() }).partial().passthrough(),
        })
        .partial()
        .passthrough()
        .optional(),
      content: Content.nullish(),
      _expandable: z
        .object({ restrictions: z.string(), content: z.string() })
        .partial()
        .passthrough(),
      _links: GenericLinks,
    })
    .passthrough(),
);
const ContentMetadata: z.ZodType<ContentMetadata> = z.lazy(() =>
  z
    .object({
      currentuser: z
        .object({
          favourited: z
            .object({
              isFavourite: z.boolean(),
              favouritedDate: z.string().datetime({ offset: true }),
            })
            .partial()
            .passthrough(),
          lastmodified: z
            .object({ version: Version.nullable(), friendlyLastModified: z.string() })
            .partial()
            .passthrough(),
          lastcontributed: z
            .object({ status: z.string(), when: z.string().datetime({ offset: true }) })
            .partial()
            .passthrough(),
          viewed: z
            .object({
              lastSeen: z.string().datetime({ offset: true }),
              friendlyLastSeen: z.string(),
            })
            .partial()
            .passthrough(),
          scheduled: z.object({}).partial().passthrough(),
          _expandable: z
            .object({
              favourited: z.string(),
              lastmodified: z.string(),
              lastcontributed: z.string(),
              viewed: z.string(),
              scheduled: z.string(),
            })
            .partial()
            .passthrough(),
        })
        .partial()
        .passthrough(),
      properties: GenericLinks,
      frontend: z.object({}).partial().passthrough(),
      labels: z.union([LabelArray, z.array(Label)]),
    })
    .partial()
    .passthrough(),
);
const Content: z.ZodType<Content> = z.lazy(() =>
  z
    .object({
      id: z.string().optional(),
      type: z.string(),
      status: z.string(),
      title: z.string().optional(),
      space: Space.nullish(),
      history: ContentHistory.nullish(),
      version: Version.nullish(),
      ancestors: z.array(Content).nullish(),
      operations: z.array(OperationCheckResult).optional(),
      children: ContentChildren.optional(),
      childTypes: ContentChildType.optional(),
      descendants: ContentChildren.optional(),
      container: Container.nullish(),
      body: z
        .object({
          view: ContentBody,
          export_view: ContentBody,
          styled_view: ContentBody,
          storage: ContentBody,
          wiki: ContentBody,
          editor: ContentBody,
          editor2: ContentBody,
          anonymous_export_view: ContentBody,
          atlas_doc_format: ContentBody,
          dynamic: ContentBody,
          raw: ContentBody,
          _expandable: z
            .object({
              editor: z.string(),
              view: z.string(),
              export_view: z.string(),
              styled_view: z.string(),
              storage: z.string(),
              editor2: z.string(),
              anonymous_export_view: z.string(),
              atlas_doc_format: z.string(),
              wiki: z.string(),
              dynamic: z.string(),
              raw: z.string(),
            })
            .partial()
            .passthrough(),
        })
        .partial()
        .passthrough()
        .optional(),
      restrictions: z
        .object({
          read: ContentRestriction,
          update: ContentRestriction,
          _expandable: z.object({ read: z.string(), update: z.string() }).partial().passthrough(),
          _links: GenericLinks,
        })
        .partial()
        .passthrough()
        .optional(),
      metadata: ContentMetadata.optional(),
      macroRenderedOutput: z.record(z.object({}).partial().passthrough()).optional(),
      extensions: z.object({}).partial().passthrough().optional(),
      _expandable: z
        .object({
          childTypes: z.string(),
          container: z.string(),
          metadata: z.string(),
          operations: z.string(),
          children: z.string(),
          restrictions: z.string(),
          history: z.string(),
          ancestors: z.string(),
          body: z.string(),
          version: z.string(),
          descendants: z.string(),
          space: z.string(),
          extensions: z.string(),
          schedulePublishDate: z.string(),
          schedulePublishInfo: z.string(),
          macroRenderedOutput: z.string(),
        })
        .partial()
        .passthrough()
        .optional(),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
);
const ContentId = z.string();
const AttachmentPropertiesUpdateBody = z
  .object({
    id: z.string(),
    type: z.string(),
    status: z.string().optional(),
    title: z.string().optional(),
    container: Container.nullish(),
    metadata: z.object({ mediaType: z.string() }).partial().passthrough().optional(),
    extensions: z.object({}).partial().passthrough().optional(),
    version: Version.nullable(),
  })
  .passthrough();
const MacroInstance = z
  .object({
    name: z.string(),
    body: z.string(),
    parameters: z.object({}).partial().passthrough(),
    _links: GenericLinks,
  })
  .partial()
  .passthrough();
const AsyncId = z.object({ asyncId: z.string() }).passthrough();
const LabelCreate = z.object({ prefix: z.string(), name: z.string() }).passthrough();
const LabelCreateArray = z.array(LabelCreate);
const addLabelsToContent_Body = z.union([LabelCreateArray, LabelCreate]);
const WatchUser = z
  .object({
    type: z.string(),
    username: GenericUserName.nullish(),
    userKey: GenericUserKey.nullish(),
    accountId: GenericAccountId.nullable(),
    profilePicture: Icon.nullable(),
    displayName: z.string(),
    timeZone: z.string().nullish(),
    operations: z.array(OperationCheckResult).nullable(),
    externalCollaborator: z.boolean(),
    isGuest: z.boolean().nullable(),
    isExternalCollaborator: z.boolean(),
    details: UserDetails.optional(),
    accountType: z.string(),
    email: z.string(),
    publicName: z.string(),
    personalSpace: z.object({}).partial().passthrough().nullable(),
  })
  .passthrough();
const Watch = z
  .object({ type: z.string(), watcher: WatchUser, contentId: z.number().int() })
  .passthrough();
const WatchArray = z
  .object({
    results: z.array(Watch),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const SpaceWatch = z
  .object({
    type: z.string(),
    watcher: WatchUser,
    spaceKey: z.string().optional(),
    labelName: z.string().optional(),
    prefix: z.string().optional(),
  })
  .passthrough();
const SpaceWatchArray = z
  .object({
    results: z.array(SpaceWatch),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const CopyPageHierarchyTitleOptions = z
  .object({ prefix: z.string(), replace: z.string(), search: z.string() })
  .partial()
  .passthrough();
const CopyPageHierarchyRequest = z
  .object({
    copyAttachments: z.boolean().optional().default(false),
    copyPermissions: z.boolean().optional().default(false),
    copyProperties: z.boolean().optional().default(false),
    copyLabels: z.boolean().optional().default(false),
    copyCustomContents: z.boolean().optional().default(false),
    copyDescendants: z.boolean().optional().default(true),
    destinationPageId: ContentId,
    titleOptions: CopyPageHierarchyTitleOptions.optional(),
  })
  .passthrough();
const CopyPageRequestDestination = z
  .object({
    type: z.enum(['space', 'existing_page', 'parent_page', 'parent_content']),
    value: z.string(),
  })
  .passthrough();
const ContentBodyCreate = z
  .object({
    value: z.string(),
    representation: z.enum([
      'view',
      'export_view',
      'styled_view',
      'storage',
      'editor',
      'editor2',
      'anonymous_export_view',
      'wiki',
      'atlas_doc_format',
      'plain',
      'raw',
    ]),
  })
  .passthrough();
const CopyPageRequest = z
  .object({
    copyAttachments: z.boolean().optional().default(false),
    copyPermissions: z.boolean().optional().default(false),
    copyProperties: z.boolean().optional().default(false),
    copyLabels: z.boolean().optional().default(false),
    copyCustomContents: z.boolean().optional().default(false),
    destination: CopyPageRequestDestination,
    pageTitle: z.string().optional(),
    body: z
      .object({ storage: ContentBodyCreate, editor2: ContentBodyCreate })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const PermissionSubjectWithGroupId = z
  .object({ type: z.enum(['user', 'group']), identifier: z.string() })
  .passthrough();
const ContentPermissionRequest = z
  .object({
    subject: PermissionSubjectWithGroupId,
    operation: z.enum(['read', 'update', 'delete']),
  })
  .passthrough();
const Message = z
  .object({
    translation: z.string().optional(),
    args: z.array(z.union([z.string(), z.object({}).partial().passthrough()])),
  })
  .passthrough();
const PermissionCheckResponse = z
  .object({
    hasPermission: z.boolean(),
    errors: z.array(Message).optional(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const ContentRestrictionArray = z
  .object({
    results: z.array(ContentRestriction),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    restrictionsHash: z.string(),
    _links: GenericLinks,
  })
  .passthrough();
const ContentRestrictionUpdate = z
  .object({
    operation: z.enum([
      'administer',
      'copy',
      'create',
      'delete',
      'export',
      'move',
      'purge',
      'purge_version',
      'read',
      'restore',
      'update',
      'use',
    ]),
    restrictions: z
      .object({
        group: z.array(
          z.object({ type: z.literal('group'), id: z.string().optional() }).passthrough(),
        ),
        user: z.union([z.array(User), UserArray]),
      })
      .partial()
      .passthrough(),
    content: Content.nullish(),
  })
  .passthrough();
const ContentRestrictionAddOrUpdateArray = z.union([
  z
    .object({
      results: z.array(ContentRestrictionUpdate),
      start: z.number().int().optional(),
      limit: z.number().int().optional(),
      size: z.number().int().optional(),
      restrictionsHash: z.string().optional(),
      _links: GenericLinks.optional(),
    })
    .passthrough(),
  z.array(ContentRestrictionUpdate),
]);
const ContentState = z
  .object({ id: z.number().int(), name: z.string(), color: z.string() })
  .passthrough();
const ContentStateResponse = z
  .object({ contentState: ContentState, lastUpdated: z.string() })
  .partial()
  .passthrough();
const ContentStateRestInput = z
  .object({ name: z.string(), color: z.string(), id: z.number().int() })
  .partial()
  .passthrough();
const AvailableContentStates = z
  .object({ spaceContentStates: z.array(ContentState), customContentStates: z.array(ContentState) })
  .passthrough();
const VersionRestore = z
  .object({
    operationKey: z.literal('restore'),
    params: z
      .object({
        versionNumber: z.number().int(),
        message: z.string(),
        restoreTitle: z.boolean().optional().default(false),
      })
      .passthrough(),
  })
  .passthrough();
const AsyncContentBody = z
  .object({
    value: z.string(),
    representation: z.enum([
      'view',
      'export_view',
      'styled_view',
      'storage',
      'editor',
      'editor2',
      'anonymous_export_view',
      'wiki',
      'atlas_doc_format',
    ]),
    renderTaskId: z.string(),
    error: z.string(),
    status: z.enum(['WORKING', 'QUEUED', 'FAILED', 'COMPLETED', 'RERUNNING']),
    embeddedContent: z.array(EmbeddedContent),
    webresource: WebResourceDependencies,
    mediaToken: z
      .object({
        collectionIds: z.array(z.string()),
        contentId: z.string(),
        expiryDateTime: z.string(),
        fileIds: z.array(z.string()),
        token: z.string(),
      })
      .partial()
      .passthrough(),
    _expandable: z
      .object({
        content: z.string(),
        embeddedContent: z.string(),
        webresource: z.string(),
        mediaToken: z.string(),
      })
      .partial()
      .passthrough(),
    _links: GenericLinks,
  })
  .partial()
  .passthrough();
const ContentBodyConversionInput = z
  .object({
    to: z.string(),
    allowCache: z.boolean().optional().default(false),
    spaceKeyContext: z.string().optional(),
    contentIdContext: z.string().optional(),
    embeddedContentRender: z.enum(['current', 'version-at-save']).optional().default('current'),
    expand: z.array(z.string()).optional(),
    body: ContentBodyCreate,
  })
  .passthrough();
const ContentBodyConversionInputArray = z.array(ContentBodyConversionInput);
const AsyncIdArray = z.array(AsyncId);
const AsyncContentBodyArray = z.array(AsyncContentBody);
const LabeledContentType = z.enum(['page', 'blogpost', 'attachment', 'page_template']);
const LabeledContent = z
  .object({ contentType: LabeledContentType, contentId: z.number().int(), title: z.string() })
  .passthrough();
const LabeledContentPageResponse = z
  .object({
    results: z.array(LabeledContent),
    start: z.number().int().optional(),
    limit: z.number().int().optional(),
    size: z.number().int(),
  })
  .passthrough();
const LabelDetails = z
  .object({ label: Label, associatedContents: LabeledContentPageResponse.optional() })
  .passthrough();
const GroupArrayWithLinks = z
  .object({
    results: z.array(Group),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    totalSize: z.number().int().optional().default(0),
    _links: GenericLinks,
  })
  .passthrough();
const GroupName = z.object({ name: z.string() }).passthrough();
const AccountId = z.object({ accountId: z.string() }).passthrough();
const LongTaskStatus = z
  .object({
    ari: z.string().optional(),
    id: z.string(),
    name: z
      .object({ key: z.string(), args: z.array(z.object({}).partial().passthrough()) })
      .passthrough(),
    elapsedTime: z.number().int(),
    percentageComplete: z.number().int(),
    successful: z.boolean(),
    finished: z.boolean(),
    messages: z.array(Message),
    status: z.string().optional(),
    errors: z.array(Message).optional(),
    additionalDetails: z
      .object({
        destinationId: z.string(),
        destinationUrl: z.string(),
        totalPageNeedToCopy: z.number().int(),
        additionalProperties: z.string(),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const LongTaskStatusArray = z
  .object({
    results: z.array(LongTaskStatus),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const LongTaskStatusWithLinks = z
  .object({
    ari: z.string().optional(),
    id: z.string(),
    name: z
      .object({ key: z.string(), args: z.array(z.object({}).partial().passthrough()) })
      .passthrough(),
    elapsedTime: z.number().int(),
    percentageComplete: z.number().int(),
    successful: z.boolean(),
    finished: z.boolean(),
    messages: z.array(Message),
    _links: GenericLinks,
    status: z.string().optional(),
    errors: z.array(Message).optional(),
    additionalDetails: z
      .object({
        destinationId: z.string().nullable(),
        destinationUrl: z.string(),
        totalPageNeedToCopy: z.number().int(),
        additionalProperties: z.string(),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const RelationData = z
  .object({
    createdBy: User.nullable(),
    createdDate: z.string().datetime({ offset: true }),
    friendlyCreatedDate: z.string(),
  })
  .partial()
  .passthrough();
const Relation = z
  .object({
    name: z.string(),
    relationData: RelationData.optional(),
    source: z.union([Content, User, Space]).optional(),
    target: z.union([Content, User, Space]).optional(),
    _expandable: z
      .object({ relationData: z.string(), source: z.string(), target: z.string() })
      .partial()
      .passthrough()
      .optional(),
    _links: GenericLinks,
  })
  .passthrough();
const RelationArray = z
  .object({
    results: z.array(Relation),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const ContainerSummary = z.object({ title: z.string(), displayUrl: z.string() }).passthrough();
const Breadcrumb = z
  .object({ label: z.string(), url: z.string(), separator: z.string() })
  .passthrough();
const SearchResult = z
  .object({
    content: Content.nullish(),
    user: User.nullish(),
    space: Space.nullish(),
    title: z.string(),
    excerpt: z.string(),
    url: z.string(),
    resultParentContainer: ContainerSummary.optional(),
    resultGlobalContainer: ContainerSummary.optional(),
    breadcrumbs: z.array(Breadcrumb),
    entityType: z.string(),
    iconCssClass: z.string(),
    lastModified: z.string().datetime({ offset: true }),
    friendlyLastModified: z.string().optional(),
    score: z.number().optional(),
  })
  .passthrough();
const SearchPageResponseSearchResult = z
  .object({
    results: z.array(SearchResult),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    totalSize: z.number().int(),
    cqlQuery: z.string(),
    searchDuration: z.number().int(),
    archivedResultCount: z.number().int().optional(),
    _links: GenericLinks,
  })
  .passthrough();
const LookAndFeelSettings = z
  .object({
    selected: z.enum(['global', 'custom']),
    global: LookAndFeel,
    theme: LookAndFeel.optional(),
    custom: LookAndFeel,
  })
  .passthrough();
const LookAndFeelSelection = z
  .object({ spaceKey: z.string(), lookAndFeelType: z.enum(['global', 'custom', 'theme']) })
  .passthrough();
const LookAndFeelWithLinks = LookAndFeel.and(
  z.object({ _links: GenericLinks }).partial().passthrough(),
);
const SystemInfoEntity = z
  .object({
    cloudId: z.string(),
    commitHash: z.string(),
    baseUrl: z.string().optional(),
    fallbackBaseUrl: z.string().optional(),
    edition: z.string().optional(),
    siteTitle: z.string().optional(),
    defaultLocale: z.string().optional(),
    defaultTimeZone: z.string().optional(),
    microsPerimeter: z.string().optional(),
  })
  .passthrough();
const ThemeNoLinks = z
  .object({
    themeKey: z.string(),
    name: z.string().optional(),
    description: z.string().optional(),
    icon: Icon.nullish(),
  })
  .passthrough();
const ThemeArray = z
  .object({
    results: z.array(ThemeNoLinks),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const SpaceDescriptionCreate = z
  .object({
    plain: z.object({ value: z.string(), representation: z.string() }).partial().passthrough(),
  })
  .passthrough();
const GroupCreate = z
  .object({ type: z.literal('group').default('group'), id: z.string().optional() })
  .passthrough();
const SpacePermissionCreate = z
  .object({
    subjects: z
      .object({
        user: z.object({ results: z.array(User), size: z.number().int() }).passthrough(),
        group: z.object({ results: z.array(GroupCreate), size: z.number().int() }).passthrough(),
      })
      .partial()
      .passthrough()
      .optional(),
    operation: OperationCheckResult,
    anonymousAccess: z.boolean().default(false),
    unlicensedAccess: z.boolean().default(false),
  })
  .passthrough();
const SpaceCreate = z
  .object({
    name: z.string().max(200),
    key: z.string().optional(),
    alias: z.string().optional(),
    description: SpaceDescriptionCreate.nullish(),
    permissions: z.array(SpacePermissionCreate).nullish(),
  })
  .passthrough();
const SpaceUpdate = z
  .object({
    name: z.string().max(200).nullable(),
    description: SpaceDescriptionCreate.nullable(),
    homepage: z.object({}).partial().passthrough().nullable(),
    type: z.string(),
    status: z.string().nullable(),
  })
  .partial()
  .passthrough();
const PermissionSubject = z
  .object({ type: z.enum(['user', 'group']), identifier: z.string() })
  .passthrough();
const SpacePermissionRequest = z
  .object({
    subject: PermissionSubject,
    operation: z
      .object({
        key: z.enum([
          'administer',
          'archive',
          'copy',
          'create',
          'delete',
          'export',
          'move',
          'purge',
          'purge_version',
          'read',
          'restore',
          'restrict_content',
          'update',
          'use',
        ]),
        target: z.enum(['page', 'blogpost', 'comment', 'attachment', 'space']),
      })
      .passthrough(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const SpacePermissionV2 = z
  .object({
    id: z.number().int(),
    subject: PermissionSubject,
    operation: z
      .object({
        key: z.enum([
          'administer',
          'archive',
          'copy',
          'create',
          'delete',
          'export',
          'move',
          'purge',
          'purge_version',
          'read',
          'restore',
          'restrict_content',
          'update',
          'use',
        ]),
        target: z.enum(['page', 'blogpost', 'comment', 'attachment', 'space']),
      })
      .passthrough(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const SpacePermissionCustomContent = z
  .object({
    subject: PermissionSubject,
    operations: z.array(
      z
        .object({
          key: z.enum(['read', 'create', 'delete']),
          target: z.string(),
          access: z.boolean(),
        })
        .passthrough(),
    ),
  })
  .passthrough();
const SpaceSettingsUpdate = z.object({ routeOverrideEnabled: z.boolean() }).partial().passthrough();
const ContentStateSettings = z
  .object({
    contentStatesAllowed: z.boolean(),
    customContentStatesAllowed: z.boolean(),
    spaceContentStatesAllowed: z.boolean(),
    spaceContentStates: z.array(ContentState).optional(),
  })
  .passthrough();
const ThemeUpdate = z.object({ themeKey: z.string() }).passthrough();
const ContentTemplateBodyCreate = z
  .object({
    view: ContentBodyCreate,
    export_view: ContentBodyCreate,
    styled_view: ContentBodyCreate,
    storage: ContentBodyCreate,
    editor: ContentBodyCreate,
    editor2: ContentBodyCreate,
    wiki: ContentBodyCreate,
    atlas_doc_format: ContentBodyCreate,
    anonymous_export_view: ContentBodyCreate,
  })
  .partial()
  .passthrough();
const ContentTemplateUpdate = z
  .object({
    templateId: z.string(),
    name: z.string(),
    templateType: z.literal('page'),
    body: ContentTemplateBodyCreate,
    description: z.string().max(100).optional(),
    labels: z.array(Label).optional(),
    space: z.object({ key: z.string() }).passthrough().nullish(),
  })
  .passthrough();
const ContentTemplateBody = z
  .object({
    view: ContentBody,
    export_view: ContentBody,
    styled_view: ContentBody,
    storage: ContentBody,
    editor: ContentBody,
    editor2: ContentBody,
    wiki: ContentBody,
    atlas_doc_format: ContentBody,
    anonymous_export_view: ContentBody,
  })
  .partial()
  .passthrough();
const ContentTemplate = z
  .object({
    templateId: z.string(),
    originalTemplate: z
      .object({ pluginKey: z.string(), moduleKey: z.string() })
      .partial()
      .passthrough()
      .optional(),
    referencingBlueprint: z.string().optional(),
    name: z.string(),
    description: z.string(),
    space: z.object({}).partial().passthrough().optional(),
    labels: z.array(Label),
    templateType: z.string(),
    editorVersion: z.string().optional(),
    body: ContentTemplateBody.optional(),
    _expandable: z.object({ body: z.string() }).partial().passthrough().optional(),
    _links: GenericLinks,
  })
  .passthrough();
const ContentTemplateCreate = z
  .object({
    name: z.string(),
    templateType: z.string(),
    body: ContentTemplateBodyCreate,
    description: z.string().max(255).optional(),
    labels: z.array(Label).optional(),
    space: z.object({ key: z.string() }).passthrough().nullish(),
  })
  .passthrough();
const BlueprintTemplate = z
  .object({
    templateId: z.string(),
    originalTemplate: z.object({ pluginKey: z.string(), moduleKey: z.string() }).passthrough(),
    referencingBlueprint: z.string(),
    name: z.string(),
    description: z.string(),
    space: z.object({}).partial().passthrough().optional(),
    labels: z.array(Label),
    templateType: z.string(),
    editorVersion: z.string().optional(),
    body: ContentTemplateBody.optional(),
    _expandable: z.object({ body: z.string() }).partial().passthrough().optional(),
    _links: GenericLinks,
  })
  .passthrough();
const BlueprintTemplateArray = z
  .object({
    results: z.array(BlueprintTemplate),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const ContentTemplateArray = z
  .object({
    results: z.array(ContentTemplate),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const UserAnonymous = z
  .object({
    type: z.string(),
    profilePicture: Icon.nullable(),
    displayName: z.string(),
    operations: z.array(OperationCheckResult).optional(),
    _expandable: z.object({ operations: z.string() }).partial().passthrough().optional(),
    _links: GenericLinks,
  })
  .passthrough();
const BulkUserLookup = z
  .object({
    type: z.enum(['known', 'unknown', 'anonymous', 'user']),
    username: GenericUserName.nullish(),
    userKey: GenericUserKey.nullish(),
    accountId: GenericAccountId.nullable(),
    accountType: z.string(),
    email: z.string(),
    publicName: z.string(),
    profilePicture: Icon.nullable(),
    displayName: z.string(),
    timeZone: z.string().nullish(),
    isExternalCollaborator: z.boolean().optional(),
    isGuest: z.boolean().optional(),
    operations: z.array(OperationCheckResult).optional(),
    details: UserDetails.optional(),
    personalSpace: Space.nullish(),
    _expandable: z
      .object({ operations: z.string(), details: z.string(), personalSpace: z.string() })
      .partial()
      .passthrough(),
    _links: GenericLinks,
  })
  .passthrough();
const BulkUserLookupArray = z
  .object({
    results: z.array(BulkUserLookup),
    start: z.number().int(),
    limit: z.number().int(),
    size: z.number().int(),
    _links: GenericLinks,
  })
  .passthrough();
const UserWatch = z.object({ watching: z.boolean() }).passthrough();
const AccountIdEmailRecord = z.object({ accountId: z.string(), email: z.string() }).passthrough();
const AccountIdEmailRecordArray = z.array(AccountIdEmailRecord);
const ConnectModule = z.object({}).partial().passthrough();
const ConnectModules = z.object({ modules: z.array(ConnectModule) }).passthrough();
const UserPropertyKeyArray = z
  .object({
    results: z.array(z.object({ key: z.string() }).partial().passthrough()),
    start: z.number().int().optional(),
    limit: z.number().int().optional(),
    size: z.number().int().optional(),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const UserProperty = z
  .object({
    key: z.string(),
    value: z.object({}).partial().passthrough(),
    id: z.string(),
    lastModifiedDate: z.string().datetime({ offset: true }),
    createdDate: z.string().datetime({ offset: true }),
    _links: GenericLinks.optional(),
  })
  .passthrough();
const UserPropertyUpdate = z.object({ value: z.object({}).partial().passthrough() });
const UserPropertyCreate = z.object({ value: z.object({}).partial().passthrough() });

export const schemas = {
  GenericUserName,
  GenericUserKey,
  GenericAccountId,
  AffectedObject,
  ChangedValue,
  AuditRecord,
  GenericLinks,
  AuditRecordArray,
  AuditRecordCreate,
  RetentionPeriod,
  archivePages_Body,
  LongTask,
  ContentBlueprintDraft,
  Icon,
  SpaceDescription,
  Label,
  LabelArray,
  OperationCheckResult,
  UserDetails,
  User,
  Group,
  SpacePermission,
  SpaceSettings,
  Theme,
  MenusLookAndFeel,
  ButtonLookAndFeel,
  NavigationLookAndFeel,
  SearchFieldLookAndFeel,
  HeaderLookAndFeel,
  TopNavigationLookAndFeel,
  HorizontalHeaderLookAndFeel,
  ScreenLookAndFeel,
  ContainerLookAndFeel,
  ContentLookAndFeel,
  LookAndFeel,
  Space,
  UsersUserKeys,
  Version,
  ContentHistory,
  ContentArray,
  ContentChildren,
  ContentChildType,
  Container,
  Embeddable,
  EmbeddedContent,
  SuperBatchWebResources,
  WebResourceDependencies,
  ContentBody,
  UserArray,
  GroupArray,
  ContentRestriction,
  ContentMetadata,
  Content,
  ContentId,
  AttachmentPropertiesUpdateBody,
  MacroInstance,
  AsyncId,
  LabelCreate,
  LabelCreateArray,
  addLabelsToContent_Body,
  WatchUser,
  Watch,
  WatchArray,
  SpaceWatch,
  SpaceWatchArray,
  CopyPageHierarchyTitleOptions,
  CopyPageHierarchyRequest,
  CopyPageRequestDestination,
  ContentBodyCreate,
  CopyPageRequest,
  PermissionSubjectWithGroupId,
  ContentPermissionRequest,
  Message,
  PermissionCheckResponse,
  ContentRestrictionArray,
  ContentRestrictionUpdate,
  ContentRestrictionAddOrUpdateArray,
  ContentState,
  ContentStateResponse,
  ContentStateRestInput,
  AvailableContentStates,
  VersionRestore,
  AsyncContentBody,
  ContentBodyConversionInput,
  ContentBodyConversionInputArray,
  AsyncIdArray,
  AsyncContentBodyArray,
  LabeledContentType,
  LabeledContent,
  LabeledContentPageResponse,
  LabelDetails,
  GroupArrayWithLinks,
  GroupName,
  AccountId,
  LongTaskStatus,
  LongTaskStatusArray,
  LongTaskStatusWithLinks,
  RelationData,
  Relation,
  RelationArray,
  ContainerSummary,
  Breadcrumb,
  SearchResult,
  SearchPageResponseSearchResult,
  LookAndFeelSettings,
  LookAndFeelSelection,
  LookAndFeelWithLinks,
  SystemInfoEntity,
  ThemeNoLinks,
  ThemeArray,
  SpaceDescriptionCreate,
  GroupCreate,
  SpacePermissionCreate,
  SpaceCreate,
  SpaceUpdate,
  PermissionSubject,
  SpacePermissionRequest,
  SpacePermissionV2,
  SpacePermissionCustomContent,
  SpaceSettingsUpdate,
  ContentStateSettings,
  ThemeUpdate,
  ContentTemplateBodyCreate,
  ContentTemplateUpdate,
  ContentTemplateBody,
  ContentTemplate,
  ContentTemplateCreate,
  BlueprintTemplate,
  BlueprintTemplateArray,
  ContentTemplateArray,
  UserAnonymous,
  BulkUserLookup,
  BulkUserLookupArray,
  UserWatch,
  AccountIdEmailRecord,
  AccountIdEmailRecordArray,
  ConnectModule,
  ConnectModules,
  UserPropertyKeyArray,
  UserProperty,
  UserPropertyUpdate,
  UserPropertyCreate,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/atlassian-connect/1/app/module/dynamic',
    alias: 'getModules',
    description: `Returns all modules registered dynamically by the calling app.

**[Permissions](#permissions) required:** Only Connect apps can make this request.`,
    requestFormat: 'json',
    response: z.void(),
    errors: [
      {
        status: 401,
        description: `Returned if the call is not from a Connect app.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/atlassian-connect/1/app/module/dynamic',
    alias: 'registerModules',
    description: `Registers a list of modules. For the list of modules that support dynamic registration, see [Dynamic modules](https://developer.atlassian.com/cloud/confluence/dynamic-modules/).

**[Permissions](#permissions) required:** Only Connect apps can make this request.`,
    requestFormat: 'text',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ConnectModules,
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if:
* any of the provided modules is invalid. For example, required properties are missing.
* any of the modules conflict with registered dynamic modules or modules defined in the app descriptor. For example, there are duplicate keys.

Details of the issues encountered are included in the error message.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the call is not from a Connect app.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/atlassian-connect/1/app/module/dynamic',
    alias: 'removeModules',
    description: `Remove all or a list of modules registered by the calling app.

**[Permissions](#permissions) required:** Only Connect apps can make this request.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'moduleKey',
        type: 'Query',
        schema: z.array(z.string()),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 401,
        description: `Returned if the call is not from a Connect app.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/analytics/content/:contentId/viewers',
    alias: 'getViewers',
    description: `Get the total number of distinct viewers a piece of content has.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'fromDate',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.object({ id: z.number().int(), count: z.number().int() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Returned if client input is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the authentication credentials are missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;
- There is no content with the given ID.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/analytics/content/:contentId/views',
    alias: 'getViews',
    description: `Get the total number of views a piece of content has.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'fromDate',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.object({ id: z.number().int(), count: z.number().int() }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Returned if client input is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the authentication credentials are missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;
- There is no content with the given ID.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/audit',
    alias: 'getAuditRecords',
    description: `Returns all records in the audit log, optionally for a certain date range.
This contains information about events like space exports, group membership
changes, app installations, etc. For more information, see
[Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html)
in the Confluence administrator&#x27;s guide.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'startDate',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'endDate',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'searchString',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(1000),
      },
    ],
    response: AuditRecordArray,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the audit
log.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/audit',
    alias: 'createAuditRecord',
    description: `Creates a record in the audit log.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The record to be created in the audit log.`,
        type: 'Body',
        schema: AuditRecordCreate,
      },
    ],
    response: AuditRecord,
    errors: [
      {
        status: 400,
        description: `Returned if the &#x60;remoteAddress&#x60; property is not specified.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/audit/export',
    alias: 'exportAuditRecords',
    description: `Exports audit records as a CSV file or ZIP file.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'startDate',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'endDate',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'searchString',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'format',
        type: 'Query',
        schema: z.enum(['csv', 'zip']).optional().default('csv'),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the audit
log.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/audit/retention',
    alias: 'getRetentionPeriod',
    description: `Returns the retention period for records in the audit log. The retention
period is how long an audit record is kept for, from creation date until
it is deleted.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    response: RetentionPeriod,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the audit
log.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/audit/retention',
    alias: 'setRetentionPeriod',
    description: `Sets the retention period for records in the audit log. The retention period
can be set to a maximum of 1 year.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The updated retention period.`,
        type: 'Body',
        schema: RetentionPeriod,
      },
    ],
    response: RetentionPeriod,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the audit
log.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/audit/since',
    alias: 'getAuditRecordsForTimePeriod',
    description: `Returns records from the audit log, for a time period back from the current
date. For example, you can use this method to get the last 3 months of records.

This contains information about events like space exports, group membership
changes, app installations, etc. For more information, see
[Audit log](https://confluence.atlassian.com/confcloud/audit-log-802164269.html)
in the Confluence administrator&#x27;s guide.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'number',
        type: 'Query',
        schema: z.number().int().optional().default(3),
      },
      {
        name: 'units',
        type: 'Query',
        schema: z
          .enum([
            'NANOS',
            'MICROS',
            'MILLIS',
            'SECONDS',
            'MINUTES',
            'HOURS',
            'HALF_DAYS',
            'DAYS',
            'WEEKS',
            'MONTHS',
            'YEARS',
            'DECADES',
            'CENTURIES',
          ])
          .optional()
          .default('MONTHS'),
      },
      {
        name: 'searchString',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(1000),
      },
    ],
    response: AuditRecordArray,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the audit
log.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content-states',
    alias: 'getCustomContentStates',
    description: `Get custom content states that authenticated user has created.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**
Must have user authentication.`,
    requestFormat: 'json',
    response: z.array(ContentState),
    errors: [
      {
        status: 401,
        description: `Returned if user is not authenticated.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/child/attachment',
    alias: 'createOrUpdateAttachments',
    description: `Adds an attachment to a piece of content. If the attachment already exists
for the content, then the attachment is updated (i.e. a new version of the
attachment is created).

Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request
for this method, otherwise it will be blocked. This protects against XSRF
attacks, which is necessary as this method accepts multipart/form-data.

The media type &#x27;multipart/form-data&#x27; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).
Most client libraries have classes that make it easier to implement
multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)
Java class provided by Apache HTTP Components.

Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),
in the case where the form data is text,
the charset parameter for the &quot;text/plain&quot; Content-Type may be used to
indicate the character encoding used in that part. In the case of this
API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60;
and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.

Example: This curl command attaches a file (&#x27;example.txt&#x27;) to a piece of
content (id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true. If the &#x27;example.txt&#x27;
file already exists, it will update it with a new version of the attachment.

&#x60;&#x60;&#x60; bash
curl -D- \
  -u admin:admin \
  -X PUT \
  -H &#x27;X-Atlassian-Token: nocheck&#x27; \
  -F &#x27;file&#x3D;@&quot;example.txt&quot;&#x27; \
  -F &#x27;minorEdit&#x3D;&quot;true&quot;&#x27; \
  -F &#x27;comment&#x3D;&quot;Example attachment comment&quot;; type&#x3D;text/plain; charset&#x3D;utf-8&#x27; \
  http://myhost/rest/api/content/123/child/attachment
&#x60;&#x60;&#x60;
**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'form-data',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            file: z.instanceof(File),
            comment: z.instanceof(File).optional(),
            minorEdit: z.instanceof(File),
          })
          .passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['current', 'draft']).optional().default('current'),
      },
    ],
    response: ContentArray,
    errors: [
      {
        status: 403,
        description: `Returned if;

- Attachments are disabled.
- The calling user does not have permission to add attachments to the
content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- The requested content is not found.
- The user does not have permission to view it.
- The attachment exceeds the maximum configured attachment size.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/child/attachment',
    alias: 'createAttachment',
    description: `Adds an attachment to a piece of content. This method only adds a new
attachment. If you want to update an existing attachment, use
[Create or update attachments](#api-content-id-child-attachment-put).

Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request
for this method, otherwise it will be blocked. This protects against XSRF
attacks, which is necessary as this method accepts multipart/form-data.

The media type &#x27;multipart/form-data&#x27; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).
Most client libraries have classes that make it easier to implement
multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)
Java class provided by Apache HTTP Components.

Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),
in the case where the form data is text,
the charset parameter for the &quot;text/plain&quot; Content-Type may be used to
indicate the character encoding used in that part. In the case of this
API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60;
and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.

Example: This curl command attaches a file (&#x27;example.txt&#x27;) to a container
(id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.

&#x60;&#x60;&#x60; bash
curl -D- \
  -u admin:admin \
  -X POST \
  -H &#x27;X-Atlassian-Token: nocheck&#x27; \
  -F &#x27;file&#x3D;@&quot;example.txt&quot;&#x27; \
  -F &#x27;minorEdit&#x3D;&quot;true&quot;&#x27; \
  -F &#x27;comment&#x3D;&quot;Example attachment comment&quot;; type&#x3D;text/plain; charset&#x3D;utf-8&#x27; \
  https://myhost/wiki/rest/api/content/123/child/attachment
&#x60;&#x60;&#x60;
**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'form-data',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            file: z.instanceof(File),
            comment: z.instanceof(File).optional(),
            minorEdit: z.instanceof(File),
          })
          .passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['current', 'draft']).optional().default('current'),
      },
    ],
    response: ContentArray,
    errors: [
      {
        status: 400,
        description: `Returned if the content already has an attachment with the same filename.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if;

- Attachments are disabled in Confluence.
- The calling user does not have permission to add attachments to the
content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- The requested content is not found.
- The user does not have permission to view it
- The attachment exceeds the maximum configured attachment size.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/child/attachment/:attachmentId',
    alias: 'updateAttachmentProperties',
    description: `Updates the attachment properties, i.e. the non-binary data of an attachment
like the filename, media-type, comment, and parent container.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The details of the attachment to be updated.`,
        type: 'Body',
        schema: z
          .object({
            id: z.string(),
            type: z.string(),
            status: z.string().optional(),
            title: z.string().optional(),
            container: Container.nullish(),
            metadata: z.object({ mediaType: z.string() }).partial().passthrough().optional(),
            extensions: z.object({}).partial().passthrough().optional(),
            version: Version.nullable(),
          })
          .passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'attachmentId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        id: z.string().optional(),
        type: z.string(),
        status: z.string(),
        title: z.string().optional(),
        space: Space.nullish(),
        history: ContentHistory.nullish(),
        version: Version.nullish(),
        ancestors: z.array(Content).nullish(),
        operations: z.array(OperationCheckResult).optional(),
        children: ContentChildren.optional(),
        childTypes: ContentChildType.optional(),
        descendants: ContentChildren.optional(),
        container: Container.nullish(),
        body: z
          .object({
            view: ContentBody,
            export_view: ContentBody,
            styled_view: ContentBody,
            storage: ContentBody,
            wiki: ContentBody,
            editor: ContentBody,
            editor2: ContentBody,
            anonymous_export_view: ContentBody,
            atlas_doc_format: ContentBody,
            dynamic: ContentBody,
            raw: ContentBody,
            _expandable: z
              .object({
                editor: z.string(),
                view: z.string(),
                export_view: z.string(),
                styled_view: z.string(),
                storage: z.string(),
                editor2: z.string(),
                anonymous_export_view: z.string(),
                atlas_doc_format: z.string(),
                wiki: z.string(),
                dynamic: z.string(),
                raw: z.string(),
              })
              .partial()
              .passthrough(),
          })
          .partial()
          .passthrough()
          .optional(),
        restrictions: z
          .object({
            read: ContentRestriction,
            update: ContentRestriction,
            _expandable: z.object({ read: z.string(), update: z.string() }).partial().passthrough(),
            _links: GenericLinks,
          })
          .partial()
          .passthrough()
          .optional(),
        metadata: ContentMetadata.optional(),
        macroRenderedOutput: z.record(z.object({}).partial().passthrough()).optional(),
        extensions: z.object({}).partial().passthrough().optional(),
        _expandable: z
          .object({
            childTypes: z.string(),
            container: z.string(),
            metadata: z.string(),
            operations: z.string(),
            children: z.string(),
            restrictions: z.string(),
            history: z.string(),
            ancestors: z.string(),
            body: z.string(),
            version: z.string(),
            descendants: z.string(),
            space: z.string(),
            extensions: z.string(),
            schedulePublishDate: z.string(),
            schedulePublishInfo: z.string(),
            macroRenderedOutput: z.string(),
          })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- The attachment id is invalid.
- The attachment version number is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if;

- The calling user is not permitted to update or move the attachment.
- The attachment is being moved to an invalid content type.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no attachment is found for the attachment ID.`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Returned if the version of the supplied attachment does not match
the version of the attachment stored in the database.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/child/attachment/:attachmentId/data',
    alias: 'updateAttachmentData',
    description: `Updates the binary data of an attachment, given the attachment ID, and
optionally the comment and the minor edit field.

This method is essentially the same as [Create or update attachments](#api-content-id-child-attachment-put),
except that it matches the attachment ID rather than the name.

Note, you must set a &#x60;X-Atlassian-Token: nocheck&#x60; header on the request
for this method, otherwise it will be blocked. This protects against XSRF
attacks, which is necessary as this method accepts multipart/form-data.

The media type &#x27;multipart/form-data&#x27; is defined in [RFC 7578](https://www.ietf.org/rfc/rfc7578.txt).
Most client libraries have classes that make it easier to implement
multipart posts, like the [MultipartEntityBuilder](https://hc.apache.org/httpcomponents-client-5.1.x/current/httpclient5/apidocs/)
Java class provided by Apache HTTP Components.

Note, according to [RFC 7578](https://tools.ietf.org/html/rfc7578#section-4.5),
in the case where the form data is text,
the charset parameter for the &quot;text/plain&quot; Content-Type may be used to
indicate the character encoding used in that part. In the case of this
API endpoint, the &#x60;comment&#x60; body parameter should be sent with &#x60;type&#x3D;text/plain&#x60;
and &#x60;charset&#x3D;utf-8&#x60; values. This will force the charset to be UTF-8.

Example: This curl command updates an attachment (id&#x3D;&#x27;att456&#x27;) that is attached
to a piece of content (id&#x3D;&#x27;123&#x27;) with a comment and &#x60;minorEdits&#x60;&#x3D;true.

&#x60;&#x60;&#x60; bash
curl -D- \
  -u admin:admin \
  -X POST \
  -H &#x27;X-Atlassian-Token: nocheck&#x27; \
  -F &#x27;file&#x3D;@&quot;example.txt&quot;&#x27; \
  -F &#x27;minorEdit&#x3D;&quot;true&quot;&#x27; \
  -F &#x27;comment&#x3D;&quot;Example attachment comment&quot;; type&#x3D;text/plain; charset&#x3D;utf-8&#x27; \
  http://myhost/rest/api/content/123/child/attachment/att456/data
&#x60;&#x60;&#x60;
**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'form-data',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            file: z.instanceof(File),
            comment: z.instanceof(File).optional(),
            minorEdit: z.instanceof(File),
          })
          .passthrough(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'attachmentId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        id: z.string().optional(),
        type: z.string(),
        status: z.string(),
        title: z.string().optional(),
        space: Space.nullish(),
        history: ContentHistory.nullish(),
        version: Version.nullish(),
        ancestors: z.array(Content).nullish(),
        operations: z.array(OperationCheckResult).optional(),
        children: ContentChildren.optional(),
        childTypes: ContentChildType.optional(),
        descendants: ContentChildren.optional(),
        container: Container.nullish(),
        body: z
          .object({
            view: ContentBody,
            export_view: ContentBody,
            styled_view: ContentBody,
            storage: ContentBody,
            wiki: ContentBody,
            editor: ContentBody,
            editor2: ContentBody,
            anonymous_export_view: ContentBody,
            atlas_doc_format: ContentBody,
            dynamic: ContentBody,
            raw: ContentBody,
            _expandable: z
              .object({
                editor: z.string(),
                view: z.string(),
                export_view: z.string(),
                styled_view: z.string(),
                storage: z.string(),
                editor2: z.string(),
                anonymous_export_view: z.string(),
                atlas_doc_format: z.string(),
                wiki: z.string(),
                dynamic: z.string(),
                raw: z.string(),
              })
              .partial()
              .passthrough(),
          })
          .partial()
          .passthrough()
          .optional(),
        restrictions: z
          .object({
            read: ContentRestriction,
            update: ContentRestriction,
            _expandable: z.object({ read: z.string(), update: z.string() }).partial().passthrough(),
            _links: GenericLinks,
          })
          .partial()
          .passthrough()
          .optional(),
        metadata: ContentMetadata.optional(),
        macroRenderedOutput: z.record(z.object({}).partial().passthrough()).optional(),
        extensions: z.object({}).partial().passthrough().optional(),
        _expandable: z
          .object({
            childTypes: z.string(),
            container: z.string(),
            metadata: z.string(),
            operations: z.string(),
            children: z.string(),
            restrictions: z.string(),
            history: z.string(),
            ancestors: z.string(),
            body: z.string(),
            version: z.string(),
            descendants: z.string(),
            space: z.string(),
            extensions: z.string(),
            schedulePublishDate: z.string(),
            schedulePublishInfo: z.string(),
            macroRenderedOutput: z.string(),
          })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if the attachment id is invalid.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no attachment is found for the attachment ID.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/child/attachment/:attachmentId/download',
    alias: 'downloadAttatchment',
    description: `Redirects the client to a URL that serves an attachment&#x27;s binary data.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'attachmentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'version',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 302,
        description: `Returned if download URL is found.`,
        schema: z.void(),
      },
      {
        status: 400,
        description: `Returned if version number is greater than attachment&#x27;s latest version number or an invalid value.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if there are authentication issues in request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- No content is found with the specified content ID.
- The specified content does not contain an attachment with the specified attachment ID.
- The calling user does not have permission to view the attachment.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/copy',
    alias: 'copyPage',
    description: `Copies a single page and its associated properties, permissions, attachments, and custom contents.
 The &#x60;id&#x60; path parameter refers to the content ID of the page to copy. The target of the page to be copied
 is defined using the &#x60;destination&#x60; in the request body and can be one of the following types.

  - &#x60;space&#x60;: page will be copied to the specified space as a root page on the space
  - &#x60;parent_page&#x60;: page will be copied as a child of the specified parent page
  - &#x60;parent_content&#x60;: page will be copied as a child of the specified parent content
  - &#x60;existing_page&#x60;: page will be copied and replace the specified page

By default, the following objects are expanded: &#x60;space&#x60;, &#x60;history&#x60;, &#x60;version&#x60;.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: &#x27;Add&#x27; permission for the space that the content will be copied in and permission to update the content if copying to an &#x60;existing_page&#x60;.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Request object from json post body`,
        type: 'Body',
        schema: CopyPageRequest,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- destination or any of its fields are not specified.
- destination.type is invalid.
- sub-expansions limit exceeds.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to create content at destination.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- the original page doesn&#x27;t exist.
- the destination page doesn’t exist.
- the destination space doesn’t exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId',
    alias: 'getMacroBodyByMacroId',
    description: `Returns the body of a macro in storage format, for the given macro ID.
This includes information like the name of the macro, the body of the macro,
and any macro parameters. This method is mainly used by Cloud apps.

About the macro ID: When a macro is created in a new version of content,
Confluence will generate a random ID for it, unless an ID is specified
(by an app). The macro ID will look similar to this: &#x27;50884bd9-0cb8-41d5-98be-f80943c14f96&#x27;.
The ID is then persisted as new versions of content are created, and is
only modified by Confluence if there are conflicting IDs.

For Forge macros, the value for macro ID is the &quot;local ID&quot; of that particular ADF node.
This value can be retrieved either client-side by calling view.getContext() and accessing &quot;localId&quot;
on the resulting object, or server-side by examining the &quot;local-id&quot; parameter node inside the &quot;parameters&quot; node.

Note that there are other attributes named &quot;local-id&quot;, but only this particular one is used to store the macro ID.

Example:
&lt;ac:adf-node type&#x3D;&quot;extension&quot;&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;extension-type&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;parameters&quot;&gt;
      &lt;ac:adf-parameter key&#x3D;&quot;local-id&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;
  &lt;/ac:adf-parameter&gt;
&lt;/ac:adf-node&gt;

Note, to preserve backwards compatibility this resource will also match on
the hash of the macro body, even if a macro ID is found. This check will
eventually become redundant, as macro IDs are generated for pages and
transparently propagate out to all instances.

This backwards compatibility logic does not apply to Forge macros; those
can only be retrieved by their ID.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content that the macro is in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'version',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'macroId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: MacroInstance,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- The macro does not exist in the specified version.
- There is no macro matching the given macro ID or hash.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/:to',
    alias: 'getAndConvertMacroBodyByMacroId',
    description: `Returns the body of a macro in format specified in path, for the given macro ID.
This includes information like the name of the macro, the body of the macro,
and any macro parameters.

About the macro ID: When a macro is created in a new version of content,
Confluence will generate a random ID for it, unless an ID is specified
(by an app). The macro ID will look similar to this: &#x27;50884bd9-0cb8-41d5-98be-f80943c14f96&#x27;.
The ID is then persisted as new versions of content are created, and is
only modified by Confluence if there are conflicting IDs.

For Forge macros, the value for macro ID is the &quot;local ID&quot; of that particular ADF node.
This value can be retrieved either client-side by calling view.getContext() and accessing &quot;localId&quot;
on the resulting object, or server-side by examining the &quot;local-id&quot; parameter node inside the &quot;parameters&quot; node.

Note that there are other attributes named &quot;local-id&quot;, but only this particular one is used to store the macro ID.

Example:
&lt;ac:adf-node type&#x3D;&quot;extension&quot;&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;extension-type&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;parameters&quot;&gt;
      &lt;ac:adf-parameter key&#x3D;&quot;local-id&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;
  &lt;/ac:adf-parameter&gt;
&lt;/ac:adf-node&gt;

Note, to preserve backwards compatibility this resource will also match on
the hash of the macro body, even if a macro ID is found. This check will
eventually become redundant, as macro IDs are generated for pages and
transparently propagate out to all instances.

This backwards compatibility logic does not apply to Forge macros; those
can only be retrieved by their ID.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content that the macro is in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'version',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'macroId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'spaceKeyContext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'embeddedContentRender',
        type: 'Query',
        schema: z.enum(['current', 'version-at-save']).optional().default('current'),
      },
    ],
    response: ContentBody,
    errors: [
      {
        status: 400,
        description: `Returned if invalid content representation is requested, or context is missing.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- The macro does not exist in the specified version.
- There is no macro matching the given macro ID or hash.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/history/:version/macro/id/:macroId/convert/async/:to',
    alias: 'getAndAsyncConvertMacroBodyByMacroId',
    description: `Returns Async Id of the conversion task which will convert the macro into a content body of the desired format.
The result will be available for 5 minutes after completion of the conversion.

About the macro ID: When a macro is created in a new version of content,
Confluence will generate a random ID for it, unless an ID is specified
(by an app). The macro ID will look similar to this: &#x27;884bd9-0cb8-41d5-98be-f80943c14f96&#x27;.
The ID is then persisted as new versions of content are created, and is
only modified by Confluence if there are conflicting IDs.

For Forge macros, the value for macro ID is the &quot;local ID&quot; of that particular ADF node.
This value can be retrieved either client-side by calling view.getContext() and accessing &quot;localId&quot;
on the resulting object, or server-side by examining the &quot;local-id&quot; parameter node inside the &quot;parameters&quot; node.

Note that there are other attributes named &quot;local-id&quot;, but only this particular one is used to store the macro ID.

Example:
&lt;ac:adf-node type&#x3D;&quot;extension&quot;&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;extension-type&quot;&gt;com.atlassian.ecosystem&lt;/ac:adf-attribute&gt;
  &lt;ac:adf-attribute key&#x3D;&quot;parameters&quot;&gt;
      &lt;ac:adf-parameter key&#x3D;&quot;local-id&quot;&gt;e9c4aa10-73fa-417c-888d-48c719ae4165&lt;/ac:adf-parameter&gt;
  &lt;/ac:adf-parameter&gt;
&lt;/ac:adf-node&gt;

Note, to preserve backwards compatibility this resource will also match on
the hash of the macro body, even if a macro ID is found. This check will
eventually become redundant, as macro IDs are generated for pages and
transparently propagate out to all instances.

This backwards compatibility logic does not apply to Forge macros; those
can only be retrieved by their ID.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content that the macro is in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'version',
        type: 'Path',
        schema: z.number().int(),
      },
      {
        name: 'macroId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.enum(['export_view', 'view', 'styled_view']),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'allowCache',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'spaceKeyContext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'embeddedContentRender',
        type: 'Query',
        schema: z.enum(['current', 'version-at-save']).optional().default('current'),
      },
    ],
    response: z.object({ asyncId: z.string() }).passthrough(),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- The macro does not exist in the specified version.
- There is no macro matching the given macro ID or hash.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/label',
    alias: 'addLabelsToContent',
    description: `Adds labels to a piece of content. Does not modify the existing labels.

Notes:

- Labels can also be added when creating content ([Create content](#api-content-post)).
- Labels can be updated when updating content ([Update content](#api-content-id-put)).
This will delete the existing labels and replace them with the labels in
the request.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The labels to add to the content.`,
        type: 'Body',
        schema: addLabelsToContent_Body,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LabelArray,
    errors: [
      {
        status: 400,
        description: `Returned if;

- The body contains labels with invalid characters or too many characters.
- The body contains too many labels.
- The target content would contain too many labels after the operation.
- The calling user does not have permission to edit labels.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user can view but not edit the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/label',
    alias: 'removeLabelFromContentUsingQueryParameter',
    description: `Removes a label from a piece of content. Labels can&#x27;t be deleted from archived content.
This is similar to [Remove label from content](#api-content-id-label-label-delete)
except that the label name is specified via a query parameter.

Use this method if the label name has &quot;/&quot; characters, as
[Remove label from content using query parameter](#api-content-id-label-delete)
does not accept &quot;/&quot; characters for the label name.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'name',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if the calling user can view but not edit the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/label/:label',
    alias: 'removeLabelFromContent',
    description: `Removes a label from a piece of content. Labels can&#x27;t be deleted from archived content.
This is similar to [Remove label from content using query parameter](#api-content-id-label-delete)
except that the label name is specified via a path parameter.

Use this method if the label name does not have &quot;/&quot; characters, as the path
parameter does not accept &quot;/&quot; characters for security reasons. Otherwise,
use [Remove label from content using query parameter](#api-content-id-label-delete).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'label',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if the label name has a &quot;/&quot; character.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user can view but not edit the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/notification/child-created',
    alias: 'getWatchesForPage',
    description: `Returns the watches for a page. A user that watches a page will receive
receive notifications when the page is updated.

If you want to manage watches for a page, use the following &#x60;user&#x60; methods:

- [Get content watch status for user](#api-user-watch-content-contentId-get)
- [Add content watch](#api-user-watch-content-contentId-post)
- [Remove content watch](#api-user-watch-content-contentId-delete)

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
    ],
    response: WatchArray,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/notification/created',
    alias: 'getWatchesForSpace',
    description: `Returns all space watches for the space that the content is in. A user that
watches a space will receive receive notifications when any content in the
space is updated.

If you want to manage watches for a space, use the following &#x60;user&#x60; methods:

- [Get space watch status for user](#api-user-watch-space-spaceKey-get)
- [Add space watch](#api-user-watch-space-spaceKey-post)
- [Remove space watch](#api-user-watch-space-spaceKey-delete)

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
    ],
    response: SpaceWatchArray,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/pagehierarchy/copy',
    alias: 'copyPageHierarchy',
    description: `Copy page hierarchy allows the copying of an entire hierarchy of pages and their associated properties, permissions and attachments.
 The id path parameter refers to the content id of the page to copy, and the new parent of this copied page is defined using the destinationPageId in the request body.
 The titleOptions object defines the rules of renaming page titles during the copy;
 for example, search and replace can be used in conjunction to rewrite the copied page titles.

 Response example:
 &lt;pre&gt;&lt;code&gt;
 {
      &quot;id&quot; : &quot;1180606&quot;,
      &quot;links&quot; : {
           &quot;status&quot; : &quot;/rest/api/longtask/1180606&quot;
      }
 }
 &lt;/code&gt;&lt;/pre&gt;
 Use the /longtask/&lt;taskId&gt; REST API to get the copy task status.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Request object from json post body`,
        type: 'Body',
        schema: CopyPageHierarchyRequest,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LongTask,
    errors: [
      {
        status: 400,
        description: `Returned if the title prefix is invalid (e.g. is empty, creates a conflict)`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to create content at source and destination`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if original page or destination page does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/pageTree',
    alias: 'deletePageTree',
    description: `Moves a pagetree rooted at a page to the space&#x27;s trash:

- If the content&#x27;s type is &#x60;page&#x60; and its status is &#x60;current&#x60;, it will be trashed including
all its descendants.
- For every other combination of content type and status, this API is not supported.

This API accepts the pageTree delete request and returns a task ID.
The delete process happens asynchronously.

 Response example:
 &lt;pre&gt;&lt;code&gt;
 {
      &quot;id&quot; : &quot;1180606&quot;,
      &quot;links&quot; : {
           &quot;status&quot; : &quot;/rest/api/longtask/1180606&quot;
      }
 }
 &lt;/code&gt;&lt;/pre&gt;
 Use the &#x60;/longtask/&lt;taskId&gt;&#x60; REST API to get the copy task status.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Delete&#x27; permission for the space that the content is in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LongTask,
    errors: [
      {
        status: 400,
        description: `Returned if the content id is invalid or id does not represents a &#x27;CURRENT&#x27; page.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user can not delete the content with specified id.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The requesting user does not have permission to trash the content or any of it&#x27;s descendant pages.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/permission/check',
    alias: 'checkContentPermission',
    description: `Check if a user or a group can perform an operation to the specified content. The &#x60;operation&#x60; to check
must be provided. The user’s account ID or the ID of the group can be provided in the &#x60;subject&#x60; to check
permissions against a specified user or group. The following permission checks are done to make sure that the
user or group has the proper access:

- site permissions
- space permissions
- content restrictions

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission) if checking permission for self,
otherwise &#x27;Confluence Administrator&#x27; global permission is required.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The content permission request.`,
        type: 'Body',
        schema: ContentPermissionRequest,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: PermissionCheckResponse,
    errors: [
      {
        status: 400,
        description: `Returned if;

- If any of the required fields are missing.
- If specified &#x60;subject&#x60; or &#x60;operation&#x60; is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission perform the check.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no content with the given ID.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/restriction',
    alias: 'getRestrictions',
    description: `Returns the restrictions on a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          )
          .optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(100),
      },
    ],
    response: ContentRestrictionArray,
    errors: [
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/restriction',
    alias: 'updateRestrictions',
    description: `Updates restrictions for a piece of content. This removes the existing
restrictions and replaces them with the restrictions in the request.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The updated restrictions for the content.`,
        type: 'Body',
        schema: ContentRestrictionAddOrUpdateArray,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          )
          .optional(),
      },
    ],
    response: ContentRestrictionArray,
    errors: [
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to update restrictions
for the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/restriction',
    alias: 'addRestrictions',
    description: `Adds restrictions to a piece of content. Note, this does not change any
existing restrictions on the content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The restrictions to be added to the content.`,
        type: 'Body',
        schema: ContentRestrictionAddOrUpdateArray,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          )
          .optional(),
      },
    ],
    response: ContentRestrictionArray,
    errors: [
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to add restrictions to
the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/restriction',
    alias: 'deleteRestrictions',
    description: `Removes all restrictions (read and update) on a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(
            z.enum([
              'restrictions.user',
              'read.restrictions.user',
              'update.restrictions.user',
              'restrictions.group',
              'read.restrictions.group',
              'update.restrictions.group',
              'content',
            ]),
          )
          .optional(),
      },
    ],
    response: ContentRestrictionArray,
    errors: [
      {
        status: 400,
        description: `Returned if any of the above validation rules are violated`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to alter the
restrictions on the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/restriction/byOperation',
    alias: 'getRestrictionsByOperation',
    description: `Returns restrictions on a piece of content by operation. This method is
similar to [Get restrictions](#api-content-id-restriction-get) except that
the operations are properties of the return object, rather than items in
a results array.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['restrictions.user', 'restrictions.group', 'content'])).optional(),
      },
    ],
    response: z.record(
      z.object({ operationType: ContentRestriction, _links: GenericLinks }).partial().passthrough(),
    ),
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey',
    alias: 'getRestrictionsForOperation',
    description: `Returns the restictions on a piece of content for a given operation (read
or update).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.enum(['read', 'update']),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['restrictions.user', 'restrictions.group', 'content'])).optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(100),
      },
    ],
    response: ContentRestriction,
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    alias: 'getIndividualGroupRestrictionStatusByGroupId',
    description: `Returns whether the specified content restriction applies to a group.
For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for the &#x60;123456&#x60; group id,
the following request will return &#x60;true&#x60;:

&#x60;/wiki/rest/api/content/123/restriction/byOperation/read/byGroupId/123456&#x60;

Note that a response of &#x60;true&#x60; does not guarantee that the group can view the page, as it does not account for
account-inherited restrictions, space permissions, or even product access. For more
information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.enum(['read', 'update']),
      },
      {
        name: 'groupId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the
content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if
- There is no content with the given ID.
- An invalid operation or group is specified.
- Given groupId is blank or has invalid characters`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    alias: 'addGroupToContentRestrictionByGroupId',
    description: `Adds a group to a content restriction by Group Id. That is, grant read or update
permission to the group for a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.enum(['read', 'update']),
      },
      {
        name: 'groupId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;
- Group Id is not valid`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to update the
content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;
- There is no content with the given ID.
- The calling user does not have permission to view the content.
- An invalid operation or group id is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/byGroupId/:groupId',
    alias: 'removeGroupFromContentRestriction',
    description: `Removes a group from a content restriction. That is, remove read or update
permission for the group for a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.enum(['read', 'update']),
      },
      {
        name: 'groupId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if given group id is blank`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- The restriction to be deleted does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    alias: 'getContentRestrictionStatusForUser',
    description: `Returns whether the specified content restriction applies to a user.
For example, if a page with &#x60;id&#x3D;123&#x60; has a &#x60;read&#x60; restriction for a user with an account ID of
&#x60;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;, the following request will return &#x60;true&#x60;:

&#x60;/wiki/rest/api/content/123/restriction/byOperation/read/user?accountId&#x3D;384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192&#x60;

Note that a response of &#x60;true&#x60; does not guarantee that the user can view the page, as it does not account for
account-inherited restrictions, space permissions, or even product access. For more
information, see [Confluence permissions](https://confluence.atlassian.com/x/_AozKw).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- An invalid operation or user is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    alias: 'addUserToContentRestriction',
    description: `Adds a user to a content restriction. That is, grant read or update
permission to the user for a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- Provided restrictions are invalid`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- An invalid operation or group is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/restriction/byOperation/:operationKey/user',
    alias: 'removeUserFromContentRestriction',
    description: `Removes a group from a content restriction. That is, remove read or update
permission for the group for a piece of content.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'operationKey',
        type: 'Path',
        schema: z.enum(['read', 'update']),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 404,
        description: `Returned if;

- There is no content with the given ID.
- The calling user does not have permission to view the content.
- An invalid operation or group is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/state',
    alias: 'getContentState',
    description: `Gets the current content state of the draft or current version of content. To specify the draft version, set
the parameter status to draft, otherwise archived or current will get the relevant published state.
**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['current', 'draft', 'archived']).optional().default('current'),
      },
    ],
    response: ContentStateResponse,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have content view permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the content with given id can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:id/state',
    alias: 'setContentState',
    description: `Sets the content state of the content specified and creates a new version
(publishes the content without changing the body) of the content with the new state.

You may pass in either an id of a state, or the name and color of a desired new state.
If all 3 are passed in, id will be used.
If the name and color passed in already exist under the current user&#x27;s existing custom states, the existing state will be reused.
If custom states are disabled in the space of the content (which can be determined by getting the content state space settings of the content&#x27;s space)
then this set will fail.

You may not remove a content state via this PUT request. You must use the DELETE method. A specified state is required in the body of this request.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Content state fields for state. Pass in id for an existing state, or new name and color for best matching existing state, or new state if allowed in space.`,
        type: 'Body',
        schema: ContentStateRestInput,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['current', 'draft']),
      },
    ],
    response: ContentStateResponse,
    errors: [
      {
        status: 400,
        description: `Invalid Name/Color, non-existent id of content state, or type of state desired is not allowed.
Name must be less than or exactly 20 characters. Color must be a valid hex string.
Status must be in [draft,current].`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have content edit permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the content with given id can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/state',
    alias: 'removeContentState',
    description: `Removes the content state of the content specified and creates a new version
(publishes the content without changing the body) of the content with the new status.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['current', 'draft']).optional(),
      },
    ],
    response: ContentStateResponse,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have content edit permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the content with given id can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/:id/state/available',
    alias: 'getAvailableContentStates',
    description: `Gets content states that are available for the content to be set as.
Will return all enabled Space Content States.
Will only return most the 3 most recently published custom content states to match UI editor list.
To get all custom content states, use the /content-states endpoint.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to edit the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: AvailableContentStates,
    errors: [
      {
        status: 400,
        description: `Invalid status for content. Must be in [current,draft,archived].`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have content edit permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the content with given id can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/:id/version',
    alias: 'restoreContentVersion',
    description: `Restores a historical version to be the latest version. That is, a new version
is created with the content of the historical version.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The content version to be restored.`,
        type: 'Body',
        schema: VersionRestore,
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z
      .object({
        by: User.nullish(),
        when: z.string().datetime({ offset: true }).nullable(),
        friendlyWhen: z.string().nullish(),
        message: z.string().nullish(),
        number: z.number().int(),
        minorEdit: z.boolean(),
        content: Content.nullish(),
        collaborators: UsersUserKeys.nullish(),
        _expandable: z
          .object({ content: z.string(), collaborators: z.string() })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
        contentTypeModified: z.boolean().optional(),
        confRev: z.string().nullish(),
        syncRev: z.string().nullish(),
        syncRevSource: z.string().nullish(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- There is no content with the given ID.
- There is no version with the given version number.
- The version number is the current version.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user doesn&#x27;t have permission to edit the
content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/content/:id/version/:versionNumber',
    alias: 'deleteContentVersion',
    description: `Delete a historical version. This does not delete the changes made to the
content in that version, rather the changes for the deleted version are
rolled up into the next version. Note, you cannot delete the current version.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'versionNumber',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- The content or version cannot be found.
- The current version is specified.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user doesn&#x27;t have permission to edit the
content.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/:pageId/move/:position/:targetId',
    alias: 'movePage',
    description: `Move a page to a new location relative to a target page:

* &#x60;before&#x60; - move the page under the same parent as the target, before the target in the list of children
* &#x60;after&#x60; - move the page under the same parent as the target, after the target in the list of children
* &#x60;append&#x60; - move the page to be a child of the target

Caution: This API can move pages to the top level of a space. Top-level pages are difficult to find in the UI
because they do not show up in the page tree display. To avoid this, never use &#x60;before&#x60; or &#x60;after&#x60; positions
when the &#x60;targetId&#x60; is a top-level page.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'pageId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'position',
        type: 'Path',
        schema: z.enum(['before', 'after', 'append']),
      },
      {
        name: 'targetId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.object({ pageId: ContentId }).partial().passthrough(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- A page already exists in the target space with the same name.
  User is advised to rename page before moving.
- The move would create a parent-child loop (page becomes a descendant and ancestor of itself)
- The page has permission restrictions that the user does not have permission to create in the target space.
  User is advised to remove restrictions before moving.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if;

- User does not have permission to remove page from current space
- User does not have permission to create a page in target space`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- The id or targetId refer to non-existent pages`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/archive',
    alias: 'archivePages',
    description: `Archives a list of pages. The pages to be archived are specified as a list of content IDs.
This API accepts the archival request and returns a task ID.
The archival process happens asynchronously.
Use the /longtask/&lt;taskId&gt; REST API to get the copy task status.

Each content ID needs to resolve to page objects that are not already in an archived state.
The content IDs need not belong to the same space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Archive&#x27; permission for each of the pages in the corresponding space it belongs to.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The pages to be archived.`,
        type: 'Body',
        schema: archivePages_Body,
      },
    ],
    response: LongTask,
    errors: [
      {
        status: 400,
        description: `Returned if:
- there is an archival job already running for the tenant.
- the number of pages to archive is larger than the limit of 300.
- any of the content IDs specified in the array do not resolve to pages.
- any of the specified pages are already archived.
- the request is coming from a free edition tenant.
- the request is coming from a non premium edition tenant with more than 1 page ID
  in the archive request.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/content/blueprint/instance/:draftId',
    alias: 'publishSharedDraft',
    description: `Publishes a shared draft of a page created from a blueprint.

By default, the following objects are expanded: &#x60;body.storage&#x60;, &#x60;history&#x60;, &#x60;space&#x60;, &#x60;version&#x60;, &#x60;ancestors&#x60;.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the draft and &#x27;Add&#x27; permission for the space that
the content will be created in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            version: z.object({ number: z.number().int() }).passthrough(),
            title: z.string().max(255),
            type: z.literal('page'),
            status: z.literal('current').optional().default('current'),
            space: z.object({ key: z.string() }).passthrough().optional(),
            ancestors: z.array(z.object({ id: z.string() }).passthrough()).nullish(),
          })
          .passthrough(),
      },
      {
        name: 'draftId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.string().optional().default('draft'),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z
      .object({
        id: z.string().optional(),
        type: z.string(),
        status: z.string(),
        title: z.string().optional(),
        space: Space.nullish(),
        history: ContentHistory.nullish(),
        version: Version.nullish(),
        ancestors: z.array(Content).nullish(),
        operations: z.array(OperationCheckResult).optional(),
        children: ContentChildren.optional(),
        childTypes: ContentChildType.optional(),
        descendants: ContentChildren.optional(),
        container: Container.nullish(),
        body: z
          .object({
            view: ContentBody,
            export_view: ContentBody,
            styled_view: ContentBody,
            storage: ContentBody,
            wiki: ContentBody,
            editor: ContentBody,
            editor2: ContentBody,
            anonymous_export_view: ContentBody,
            atlas_doc_format: ContentBody,
            dynamic: ContentBody,
            raw: ContentBody,
            _expandable: z
              .object({
                editor: z.string(),
                view: z.string(),
                export_view: z.string(),
                styled_view: z.string(),
                storage: z.string(),
                editor2: z.string(),
                anonymous_export_view: z.string(),
                atlas_doc_format: z.string(),
                wiki: z.string(),
                dynamic: z.string(),
                raw: z.string(),
              })
              .partial()
              .passthrough(),
          })
          .partial()
          .passthrough()
          .optional(),
        restrictions: z
          .object({
            read: ContentRestriction,
            update: ContentRestriction,
            _expandable: z.object({ read: z.string(), update: z.string() }).partial().passthrough(),
            _links: GenericLinks,
          })
          .partial()
          .passthrough()
          .optional(),
        metadata: ContentMetadata.optional(),
        macroRenderedOutput: z.record(z.object({}).partial().passthrough()).optional(),
        extensions: z.object({}).partial().passthrough().optional(),
        _expandable: z
          .object({
            childTypes: z.string(),
            container: z.string(),
            metadata: z.string(),
            operations: z.string(),
            children: z.string(),
            restrictions: z.string(),
            history: z.string(),
            ancestors: z.string(),
            body: z.string(),
            version: z.string(),
            descendants: z.string(),
            space: z.string(),
            extensions: z.string(),
            schedulePublishDate: z.string(),
            schedulePublishInfo: z.string(),
            macroRenderedOutput: z.string(),
          })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if a title is not specified or a page with the
title already exists.`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Returned if the version is not set to 1.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/content/blueprint/instance/:draftId',
    alias: 'publishLegacyDraft',
    description: `Publishes a legacy draft of a page created from a blueprint. Legacy drafts
will eventually be removed in favor of shared drafts. For now, this method
works the same as [Publish shared draft](#api-content-blueprint-instance-draftId-put).

By default, the following objects are expanded: &#x60;body.storage&#x60;, &#x60;history&#x60;, &#x60;space&#x60;, &#x60;version&#x60;, &#x60;ancestors&#x60;.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the draft and &#x27;Add&#x27; permission for the space that
the content will be created in.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            version: z.object({ number: z.number().int() }).passthrough(),
            title: z.string().max(255),
            type: z.literal('page'),
            status: z.literal('current').optional().default('current'),
            space: z.object({ key: z.string() }).passthrough().optional(),
            ancestors: z.array(z.object({ id: z.string() }).passthrough()).nullish(),
          })
          .passthrough(),
      },
      {
        name: 'draftId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z.string().optional().default('draft'),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: z
      .object({
        id: z.string().optional(),
        type: z.string(),
        status: z.string(),
        title: z.string().optional(),
        space: Space.nullish(),
        history: ContentHistory.nullish(),
        version: Version.nullish(),
        ancestors: z.array(Content).nullish(),
        operations: z.array(OperationCheckResult).optional(),
        children: ContentChildren.optional(),
        childTypes: ContentChildType.optional(),
        descendants: ContentChildren.optional(),
        container: Container.nullish(),
        body: z
          .object({
            view: ContentBody,
            export_view: ContentBody,
            styled_view: ContentBody,
            storage: ContentBody,
            wiki: ContentBody,
            editor: ContentBody,
            editor2: ContentBody,
            anonymous_export_view: ContentBody,
            atlas_doc_format: ContentBody,
            dynamic: ContentBody,
            raw: ContentBody,
            _expandable: z
              .object({
                editor: z.string(),
                view: z.string(),
                export_view: z.string(),
                styled_view: z.string(),
                storage: z.string(),
                editor2: z.string(),
                anonymous_export_view: z.string(),
                atlas_doc_format: z.string(),
                wiki: z.string(),
                dynamic: z.string(),
                raw: z.string(),
              })
              .partial()
              .passthrough(),
          })
          .partial()
          .passthrough()
          .optional(),
        restrictions: z
          .object({
            read: ContentRestriction,
            update: ContentRestriction,
            _expandable: z.object({ read: z.string(), update: z.string() }).partial().passthrough(),
            _links: GenericLinks,
          })
          .partial()
          .passthrough()
          .optional(),
        metadata: ContentMetadata.optional(),
        macroRenderedOutput: z.record(z.object({}).partial().passthrough()).optional(),
        extensions: z.object({}).partial().passthrough().optional(),
        _expandable: z
          .object({
            childTypes: z.string(),
            container: z.string(),
            metadata: z.string(),
            operations: z.string(),
            children: z.string(),
            restrictions: z.string(),
            history: z.string(),
            ancestors: z.string(),
            body: z.string(),
            version: z.string(),
            descendants: z.string(),
            space: z.string(),
            extensions: z.string(),
            schedulePublishDate: z.string(),
            schedulePublishInfo: z.string(),
            macroRenderedOutput: z.string(),
          })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if a title is not specified or a page with the
title already exists.`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Returned if the version is not set to 1.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/content/search',
    alias: 'searchContentByCQL',
    description: `Returns the list of content that matches a Confluence Query Language
(CQL) query. For information on CQL, see:
[Advanced searching using CQL](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).

Example initial call:
&#x60;&#x60;&#x60;
/wiki/rest/api/content/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25
&#x60;&#x60;&#x60;

Example response:
&#x60;&#x60;&#x60;
{
  &quot;results&quot;: [
    { ... },
    { ... },
    ...
    { ... }
  ],
  &quot;limit&quot;: 25,
  &quot;size&quot;: 25,
  ...
  &quot;_links&quot;: {
    &quot;base&quot;: &quot;&lt;url&gt;&quot;,
    &quot;context&quot;: &quot;&lt;url&gt;&quot;,
    &quot;next&quot;: &quot;/rest/api/content/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg&quot;,
    &quot;self&quot;: &quot;&lt;url&gt;&quot;
  }
}
&#x60;&#x60;&#x60;

When additional results are available, returns &#x60;next&#x60; and &#x60;prev&#x60; URLs to retrieve them in subsequent calls. The URLs each contain a cursor that points to the appropriate set of results. Use &#x60;limit&#x60; to specify the number of results returned in each call.
Example subsequent call (taken from example response):
&#x60;&#x60;&#x60;
/wiki/rest/api/content/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg
&#x60;&#x60;&#x60;
The response to this will have a &#x60;prev&#x60; URL similar to the &#x60;next&#x60; in the example response.

If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
Only content that the user has permission to view will be returned.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'cql',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'cqlcontext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
    ],
    response: ContentArray,
    errors: [
      {
        status: 400,
        description: `Returned if the CQL is invalid or missing.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/contentbody/convert/async/:id',
    alias: 'asyncConvertContentBodyResponse',
    description: `Returns the asynchronous content body for the corresponding id if the task is complete
or returns the status of the task.

After the task is completed, the result can be obtained for 5 minutes, or until an identical conversion request is made again,
with allowCache query param set to false.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
If request specifies &#x27;contentIdContext&#x27;, &#x27;View&#x27; permission for the space, and permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: AsyncContentBody,
    errors: [
      {
        status: 400,
        description: `Returned if the async id is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the request was not made by an anonymous user and user is not authenticated.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the requesting user is not the user who made the conversion request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if async macro conversion task cannot be found with the provided id.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/contentbody/convert/async/:to',
    alias: 'asyncConvertContentBodyRequest',
    description: `Converts a content body from one format to another format asynchronously.
Returns the asyncId for the asynchronous task.

Supported conversions:

- atlas_doc_format: editor, export_view, storage, styled_view, view
- storage: atlas_doc_format, editor, export_view, styled_view, view
- editor: storage

No other conversions are supported at the moment.
Once a conversion is completed, it will be available for 5 minutes at the result endpoint.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
If request specifies &#x27;contentIdContext&#x27;, &#x27;View&#x27; permission for the space, and permission to view the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The content body to convert.`,
        type: 'Body',
        schema: z
          .object({
            value: z.string(),
            representation: z.enum([
              'view',
              'export_view',
              'styled_view',
              'storage',
              'editor',
              'editor2',
              'anonymous_export_view',
              'wiki',
              'atlas_doc_format',
              'plain',
              'raw',
            ]),
          })
          .passthrough(),
      },
      {
        name: 'to',
        type: 'Path',
        schema: z.literal('export_view'),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'spaceKeyContext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'contentIdContext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'allowCache',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'embeddedContentRender',
        type: 'Query',
        schema: z.enum(['current', 'version-at-save']).optional().default('current'),
      },
    ],
    response: z.object({ asyncId: z.string() }).passthrough(),
    errors: [
      {
        status: 400,
        description: `Returned
- if the content body or conversion context is invalid or null
- if the value is improperly formed
- any conversion type other than export_view`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if content cannot be found with the provided context.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/contentbody/convert/async/bulk/tasks',
    alias: 'bulkAsyncConvertContentBodyRequest',
    description: `Asynchronously converts content bodies from one format to another format in bulk. Use the Content body
REST API to get the status of conversion tasks. Note that there is a maximum limit of 10 conversions per
request to this endpoint.

Supported conversions:

- storage: editor, export_view, styled_view, view
- editor: storage

Once a conversion task is completed, it is available for polling for up to 5 minutes.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space, and permission to view the content if the &#x60;spaceKeyContext&#x60; or
&#x60;contentIdContext&#x60; are present.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `An array of parameters to create content body conversion tasks.`,
        type: 'Body',
        schema: z.array(ContentBodyConversionInput),
      },
    ],
    response: z.array(AsyncId),
    errors: [
      {
        status: 400,
        description: `Returned if there are more than 10 conversions requested.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/contentbody/convert/async/bulk/tasks',
    alias: 'bulkAsyncConvertContentBodyResponse',
    description: `Returns the content body for the corresponding &#x60;asyncId&#x60; of a completed conversion task. If
the task is not completed, the task status is returned instead.

Once a conversion task is completed, the result can be obtained for up to 5 minutes, or
until an identical conversion request is made again with the &#x60;allowCache&#x60; parameter set to
false.

Note that there is a maximum limit of 50 task results per request to this endpoint.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'ids',
        type: 'Query',
        schema: z.array(z.string()),
      },
    ],
    response: z.array(AsyncContentBody),
    errors: [
      {
        status: 400,
        description: `Returned if there are more than 50 results requested.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/group',
    alias: 'getGroups',
    description: `Returns all user groups. The returned groups are ordered alphabetically in
ascending order by group name.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
      {
        name: 'accessType',
        type: 'Query',
        schema: z.enum(['user', 'admin', 'site-admin']).optional().default(null),
      },
    ],
    response: GroupArrayWithLinks,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view
groups.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/group',
    alias: 'createGroup',
    description: `Creates a new user group.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
User must be a site admin.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `Name of the group that is to be created.`,
        type: 'Body',
        schema: z.object({ name: z.string() }).passthrough(),
      },
    ],
    response: Group,
    errors: [
      {
        status: 400,
        description: `Returned if the name is missing or invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user is not a site admin.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/group/:groupId/membersByGroupId',
    alias: 'getGroupMembersByGroupId',
    description: `Returns the users that are members of a group.

Use updated Get group API

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'groupId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
      {
        name: 'shouldReturnTotalSize',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator']))
          .optional(),
      },
    ],
    response: UserArray,
    errors: [
      {
        status: 400,
        description: `Returned if given limit is greater than 200`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view users.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/group/by-id',
    alias: 'getGroupByGroupId',
    description: `Returns a user group for a given group id.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: Group,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view
groups.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the group does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/group/by-id',
    alias: 'removeGroupById',
    description: `Delete user group.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
User must be a site admin.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if the id is missing or invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user is not a site admin.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `If no user group by the given id exists.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/group/picker',
    alias: 'searchGroups',
    description: `Get search results of groups by partial query provided.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'query',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
      {
        name: 'shouldReturnTotalSize',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
    ],
    response: GroupArrayWithLinks,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view
groups.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/group/userByGroupId',
    alias: 'addUserToGroupByGroupId',
    description: `Adds a user as a member in a group represented by its groupId

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
User must be a site admin.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `AccountId of the user who needs to be added as member.`,
        type: 'Body',
        schema: z.object({ accountId: z.string() }).passthrough(),
      },
      {
        name: 'groupId',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if the groupId or accountId are missing or invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user is not a site admin.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `If no user group by the give name exists.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/group/userByGroupId',
    alias: 'removeMemberFromGroupByGroupId',
    description: `Remove user as a member from a group.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
User must be a site admin.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'groupId',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if the name is missing or invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user is not a site admin.
Note: A 204 is returned if the user is not part of the
group.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `If no user group by the give name exists or if no user exists
for the given accountId.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/label',
    alias: 'getAllLabelContent',
    description: `Returns label information and a list of contents associated with the label.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission). Only contents
that the user is permitted to view is returned.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'name',
        type: 'Query',
        schema: z.string().default(null),
      },
      {
        name: 'type',
        type: 'Query',
        schema: z
          .enum(['page', 'blogpost', 'attachment', 'page_template'])
          .optional()
          .default(null),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().optional().default(200),
      },
    ],
    response: LabelDetails,
    errors: [
      {
        status: 400,
        description: `Returned if no label name is provide or
if content type provided in the query is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view
any content including label info.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the lable name is invalid or if no label is found for a given label.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/longtask',
    alias: 'getTasks',
    description: `Returns information about all active long-running tasks (e.g. space export),
such as how long each task has been running and the percentage of each task
that has completed.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(100),
      },
    ],
    response: LongTaskStatusArray,
    errors: [
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/longtask/:id',
    alias: 'getTask',
    description: `Returns information about an active long-running task (e.g. space export),
such as how long it has been running and the percentage of the task that
has completed.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'id',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LongTaskStatusWithLinks,
    errors: [
      {
        status: 401,
        description: `Returned if the calling user is not logged in to Confluence.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no task with the given ID.
- The calling user does not have permission to view the task.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType',
    alias: 'findTargetFromSource',
    description: `Returns all target entities that have a particular relationship to the
source entity. Note, relationships are one way.

For example, the following method finds all content that the current user
has an &#x27;ignore&#x27; relationship with:
&#x60;GET /wiki/rest/api/relation/ignore/from/user/current/to/content&#x60;
Note, &#x27;ignore&#x27; is an example custom relationship type.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view both the target entity and source entity.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'relationName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'sourceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'targetType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'sourceStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'targetStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sourceVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'targetVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['relationData', 'source', 'target'])).optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
    ],
    response: RelationArray,
    errors: [
      {
        status: 400,
        description: `Returned if the request is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to view the
relationships.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the target entity does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    alias: 'getRelationship',
    description: `Find whether a particular type of relationship exists from a source
entity to a target entity. Note, relationships are one way.

For example, you can use this method to find whether the current user has
selected a particular page as a favorite (i.e. &#x27;save for later&#x27;):
&#x60;GET /wiki/rest/api/relation/favourite/from/user/current/to/content/123&#x60;

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view both the target entity and source entity.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'relationName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'sourceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'targetType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'targetKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'targetStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sourceVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'targetVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['relationData', 'source', 'target'])).optional(),
      },
    ],
    response: Relation,
    errors: [
      {
        status: 400,
        description: `Returned if the request is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to view the
relationship.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the relationship does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    alias: 'createRelationship',
    description: `Creates a relationship between two entities (user, space, content). The
&#x27;favourite&#x27; relationship is supported by default, but you can use this method
to create any type of relationship between two entities.

For example, the following method creates a &#x27;sibling&#x27; relationship between
two pieces of content:
&#x60;PUT /wiki/rest/api/relation/sibling/from/content/123/to/content/456&#x60;

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'relationName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'sourceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'targetType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'targetKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'targetStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sourceVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'targetVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
    ],
    response: Relation,
    errors: [
      {
        status: 400,
        description: `Returned if the request is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to use Confluence.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the user, space or content could not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/relation/:relationName/from/:sourceType/:sourceKey/to/:targetType/:targetKey',
    alias: 'deleteRelationship',
    description: `Deletes a relationship between two entities (user, space, content).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).
For favourite relationships, the current user can only delete their own
favourite relationships. A space administrator can delete favourite
relationships for any user.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'relationName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'sourceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'targetType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'targetKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'targetStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sourceVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'targetVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if the request is invalid.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to delete the
relationship.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the user, space or content could not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/relation/:relationName/to/:targetType/:targetKey/from/:sourceType',
    alias: 'findSourcesForTarget',
    description: `Returns all target entities that have a particular relationship to the
source entity. Note, relationships are one way.

For example, the following method finds all users that have a &#x27;collaborator&#x27;
relationship to a piece of content with an ID of &#x27;1234&#x27;:
&#x60;GET /wiki/rest/api/relation/collaborator/to/content/1234/from/user&#x60;
Note, &#x27;collaborator&#x27; is an example custom relationship type.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view both the target entity and source entity.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'relationName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'targetType',
        type: 'Path',
        schema: z.enum(['user', 'content', 'space']),
      },
      {
        name: 'targetKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'sourceStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'targetStatus',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'sourceVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'targetVersion',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['relationData', 'source', 'target'])).optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
    ],
    response: RelationArray,
    errors: [
      {
        status: 400,
        description: `Returned if the request is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to view the
relationship`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the target entity does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/search',
    alias: 'searchByCQL',
    description: `Searches for content using the
[Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).

**Note that CQL input queries submitted through the &#x60;/wiki/rest/api/search&#x60; endpoint no longer support user-specific fields like &#x60;user&#x60;, &#x60;user.fullname&#x60;, &#x60;user.accountid&#x60;, and &#x60;user.userkey&#x60;.**
See this [deprecation notice](https://developer.atlassian.com/cloud/confluence/deprecation-notice-search-api/) for more details.

Example initial call:
&#x60;&#x60;&#x60;
/wiki/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25
&#x60;&#x60;&#x60;

Example response:
&#x60;&#x60;&#x60;
{
  &quot;results&quot;: [
    { ... },
    { ... },
    ...
    { ... }
  ],
  &quot;limit&quot;: 25,
  &quot;size&quot;: 25,
  ...
  &quot;_links&quot;: {
    &quot;base&quot;: &quot;&lt;url&gt;&quot;,
    &quot;context&quot;: &quot;&lt;url&gt;&quot;,
    &quot;next&quot;: &quot;/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg&quot;,
    &quot;self&quot;: &quot;&lt;url&gt;&quot;
  }
}
&#x60;&#x60;&#x60;

When additional results are available, returns &#x60;next&#x60; and &#x60;prev&#x60; URLs to retrieve them in subsequent calls. The URLs each contain a cursor that points to the appropriate set of results. Use &#x60;limit&#x60; to specify the number of results returned in each call.

Example subsequent call (taken from example response):
&#x60;&#x60;&#x60;
/wiki/rest/api/search?cql&#x3D;type&#x3D;page&amp;limit&#x3D;25&amp;cursor&#x3D;raNDoMsTRiNg
&#x60;&#x60;&#x60;
The response to this will have a &#x60;prev&#x60; URL similar to the &#x60;next&#x60; in the example response.

If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to view the entities. Note, only entities that the user has
permission to view will be returned.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'cql',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'cqlcontext',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'next',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'prev',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'includeArchivedSpaces',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'excludeCurrentSpaces',
        type: 'Query',
        schema: z.boolean().optional().default(false),
      },
      {
        name: 'excerpt',
        type: 'Query',
        schema: z
          .enum(['highlight', 'indexed', 'none', 'highlight_unescaped', 'indexed_unescaped'])
          .optional()
          .default('highlight'),
      },
      {
        name: 'sitePermissionTypeFilter',
        type: 'Query',
        schema: z.enum(['all', 'externalCollaborator', 'none']).optional().default('none'),
      },
      {
        name: '_',
        type: 'Query',
        schema: z.number().int().optional(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
    ],
    response: SearchPageResponseSearchResult,
    errors: [
      {
        status: 400,
        description: `Returned if the CQL query cannot be parsed.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to access
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/search/user',
    alias: 'searchUser',
    description: `Searches for users using user-specific queries from the
[Confluence Query Language (CQL)](https://developer.atlassian.com/cloud/confluence/advanced-searching-using-cql/).

Note that CQL input queries submitted through the &#x60;/wiki/rest/api/search/user&#x60; endpoint only support user-specific fields like &#x60;user&#x60;, &#x60;user.fullname&#x60;, &#x60;user.accountid&#x60;, and &#x60;user.userkey&#x60;.

Note that some user fields may be set to null depending on the user&#x27;s privacy settings.
These are: email, profilePicture, displayName, and timeZone.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'cql',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'sitePermissionTypeFilter',
        type: 'Query',
        schema: z.enum(['all', 'externalCollaborator', 'none']).optional().default('none'),
      },
    ],
    response: SearchPageResponseSearchResult,
    errors: [
      {
        status: 400,
        description: `Returned if the CQL query cannot be parsed.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to access
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/settings/lookandfeel',
    alias: 'getLookAndFeelSettings',
    description: `Returns the look and feel settings for the site or a single space. This
includes attributes such as the color scheme, padding, and border radius.

The look and feel settings for a space can be inherited from the global
look and feel settings or provided by a theme.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
None`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: LookAndFeelSettings,
    errors: [
      {
        status: 400,
        description: `Returned if &#x60;spaceKey&#x60; is invalid.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no space with the given &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/settings/lookandfeel',
    alias: 'updateLookAndFeel',
    description: `Sets the look and feel settings to the default (global) settings, the
custom settings, or the current theme&#x27;s settings for a space.
The custom and theme settings can only be selected if there is already
a theme set for a space. Note, the default space settings are inherited
from the current global settings.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The look and feel type to be set.`,
        type: 'Body',
        schema: LookAndFeelSelection,
      },
    ],
    response: LookAndFeelSelection,
    errors: [
      {
        status: 400,
        description: `Returned if;

- &#x60;spaceKey&#x60; is invalid.
- &#x60;lookAndFeelType&#x60; is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user doesn&#x27;t have permission to edit the
look and feel settings.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no space with the given &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Returned if &#x60;lookAndFeelType&#x60; is set to &#x27;custom&#x27; or &#x27;theme&#x27;,
and a theme is not currently set for the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/settings/lookandfeel/custom',
    alias: 'updateLookAndFeelSettings',
    description: `Updates the look and feel settings for the site or for a single space.
If custom settings exist, they are updated. If no custom settings exist,
then a set of custom settings is created.

Note, if a theme is selected for a space, the space look and feel settings
are provided by the theme and cannot be overridden.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The updated settings. All values for the settings must be included,
regardless of whether they are being changed.

One way to create the request body is to copy the settings from the
response body of [Get look and feel settings](#api-settings-lookandfeel-get)
and modify it as needed.`,
        type: 'Body',
        schema: LookAndFeel,
      },
      {
        name: 'spaceKey',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: LookAndFeelWithLinks,
    errors: [
      {
        status: 400,
        description: `Returned if;

- The &#x60;spaceKey&#x60; is invalid
- The request body contains invalid data.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user doesn&#x27;t have permission to edit the
look and feel settings.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no space with the given &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/settings/lookandfeel/custom',
    alias: 'resetLookAndFeelSettings',
    description: `Resets the custom look and feel settings for the site or a single space.
This changes the values of the custom settings to be the same as the
default settings. It does not change which settings (default or custom)
are selected. Note, the default space settings are inherited from the
current global settings.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if &#x60;spaceKey&#x60; is invalid.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user doesn&#x27;t have permission to reset the
look and feel.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no space with the given &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/settings/systemInfo',
    alias: 'getSystemInfo',
    description: `Returns the system information for the Confluence Cloud tenant. This
information is used by Atlassian.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    response: SystemInfoEntity.nullable(),
    errors: [
      {
        status: 403,
        description: `Returned when the user does not have permission to view the system
information.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/settings/theme',
    alias: 'getThemes',
    description: `Returns all themes, not including the default theme.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(100),
      },
    ],
    response: ThemeArray,
  },
  {
    method: 'get',
    path: '/wiki/rest/api/settings/theme/:themeKey',
    alias: 'getTheme',
    description: `Returns a theme. This includes information about the theme name,
description, and icon.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'themeKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Theme,
    errors: [
      {
        status: 404,
        description: `Returned if there is no theme with the given key.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/settings/theme/selected',
    alias: 'getGlobalTheme',
    description: `Returns the globally assigned theme.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**: None`,
    requestFormat: 'json',
    response: Theme,
    errors: [
      {
        status: 404,
        description: `Returned if Confluence does not have a global theme assigned, i.e.
the default theme is used.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/space',
    alias: 'createSpace',
    description: `Creates a new space. Note, currently you cannot set space labels when
creating a space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Create Space(s)&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The space to be created.`,
        type: 'Body',
        schema: z
          .object({
            name: z.string().max(200),
            key: z.string().optional(),
            alias: z.string().optional(),
            description: SpaceDescriptionCreate.nullish(),
            permissions: z.array(SpacePermissionCreate).nullish(),
          })
          .passthrough(),
      },
    ],
    response: Space.nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if any of the following is true:

- The request is invalid.
- The space already exists.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the callig user does not have permission to create a space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/space/_private',
    alias: 'createPrivateSpace',
    description: `Creates a new space that is only visible to the creator. This method is
the same as the [Create space](#api-space-post) method with permissions
set to the current user only. Note, currently you cannot set space
labels when creating a space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Create Space(s)&#x27; global permission.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The space to be created.`,
        type: 'Body',
        schema: z
          .object({
            name: z.string().max(200),
            key: z.string().optional(),
            alias: z.string().optional(),
            description: SpaceDescriptionCreate.nullish(),
            permissions: z.array(SpacePermissionCreate).nullish(),
          })
          .passthrough(),
      },
    ],
    response: Space.nullable(),
    errors: [
      {
        status: 400,
        description: `Returned if any of the following is true:

- The request is invalid.
- The space already exists.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have permission to create a space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/space/:spaceKey',
    alias: 'updateSpace',
    description: `Updates the name, description, or homepage of a space.

-   For security reasons, permissions cannot be updated via the API and
must be changed via the user interface instead.
-   Currently you cannot set space labels when updating a space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The updated space.`,
        type: 'Body',
        schema: z
          .object({
            name: z.string().max(200).nullable(),
            description: SpaceDescriptionCreate.nullable(),
            homepage: z.object({}).partial().passthrough().nullable(),
            type: z.string(),
            status: z.string().nullable(),
          })
          .partial()
          .passthrough(),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Space.nullable(),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if any of the following is true:

- There is no space with the given key
- The calling user does not have permission to update the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/space/:spaceKey',
    alias: 'deleteSpace',
    description: `Permanently deletes a space without sending it to the trash. Note, the space will be deleted in a long running task.
Therefore, the space may not be deleted yet when this method has
returned. Clients should poll the status link that is returned in the
response until the task completes.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LongTask,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if any of the following is true:

- There is no space with the given key.
- The calling user does not have permission to delete the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/label',
    alias: 'getLabelsForSpace',
    description: `Returns a list of labels associated with a space. Can provide a prefix as well as other filters to
select different types of labels.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'prefix',
        type: 'Query',
        schema: z.enum(['global', 'my', 'team']).optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
    ],
    response: LabelArray,
    errors: [
      {
        status: 404,
        description: `Returned if;
- There is no space with the given space key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/space/:spaceKey/label',
    alias: 'addLabelsToSpace',
    description: `Adds labels to a piece of content. Does not modify the existing labels.

Notes:

- Labels can also be added when creating content ([Create content](#api-content-post)).
- Labels can be updated when updating content ([Update content](#api-content-id-put)).
This will delete the existing labels and replace them with the labels in
the request.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to update the content.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The labels to add to the content.`,
        type: 'Body',
        schema: z.array(LabelCreate),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: LabelArray,
    errors: [
      {
        status: 400,
        description: `Returned if;

- The body contains labels with invalid characters or too many characters.
- The body contains too many labels.
- The target content would contain too many labels after the operation.
- The calling user does not have permission to edit labels.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user can view but not edit the content.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;
- There is no space with the given space key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/space/:spaceKey/label',
    alias: 'deleteLabelFromSpace',
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'name',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'prefix',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;
- The user does not provide a label name`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;
- There is no space with the given space key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/space/:spaceKey/permission',
    alias: 'addPermissionToSpace',
    description: `Adds new permission to space.

If the permission to be added is a group permission, the group can be identified
by its group name or group id.

Note: Apps cannot access this REST resource - including when utilizing user impersonation.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The permission to be created.`,
        type: 'Body',
        schema: z
          .object({
            subject: PermissionSubject,
            operation: z
              .object({
                key: z.enum([
                  'administer',
                  'archive',
                  'copy',
                  'create',
                  'delete',
                  'export',
                  'move',
                  'purge',
                  'purge_version',
                  'read',
                  'restore',
                  'restrict_content',
                  'update',
                  'use',
                ]),
                target: z.enum(['page', 'blogpost', 'comment', 'attachment', 'space']),
              })
              .passthrough(),
            _links: GenericLinks.optional(),
          })
          .passthrough(),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: SpacePermissionV2,
    errors: [
      {
        status: 400,
        description: `Used for various errors. Such as:
- Permission already exists for the given user or group.
- &#x27;read space&#x27; permission doesn&#x27;t exist for the given user or group.
- No group found with the given groupName or groupId`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user isn&#x27;t authorized.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if any of the following is true:
- There is no space with the given key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/space/:spaceKey/permission/:id',
    alias: 'removePermission',
    description: `Removes a space permission. Note that removing Read Space permission for a user or group will remove all
the space permissions for that user or group.

Note: Apps cannot access this REST resource - including when utilizing user impersonation.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'id',
        type: 'Path',
        schema: z.number().int(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Used for various errors. Such as:
- All of the admin permissions cannot be removed from a space.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user isn&#x27;t authorized.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if any of the following is true:
- There is no permission with the given id.
- There is no space with the given key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/space/:spaceKey/permission/custom-content',
    alias: 'addCustomContentPermissions',
    description: `Adds new custom content permission to space.

If the permission to be added is a group permission, the group can be identified
by its group name or group id.

Note: Only apps can access this REST resource and only make changes to the respective app permissions.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The permissions to be created.`,
        type: 'Body',
        schema: SpacePermissionCustomContent,
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Used for various errors. Such as:
- Permission already exists for the given user or group.
- &#x27;read space&#x27; permission doesn&#x27;t exist for the given user or group.
- No group found with the given groupName or groupId`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user isn&#x27;t authorized.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if any of the following is true:
- There is no space with the given key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/settings',
    alias: 'getSpaceSettings',
    description: `Returns the settings of a space. Currently only the
&#x60;routeOverrideEnabled&#x60; setting can be returned.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: SpaceSettings.nullable(),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no space with the given key.
- The calling user does not have permission to view the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/space/:spaceKey/settings',
    alias: 'updateSpaceSettings',
    description: `Updates the settings for a space. Currently only the
&#x60;routeOverrideEnabled&#x60; setting can be updated.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The space settings to update.`,
        type: 'Body',
        schema: z.object({ routeOverrideEnabled: z.boolean() }).partial().passthrough(),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: SpaceSettings.nullable(),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no space with the given key.
- The calling user does not have permission to update the space.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/state',
    alias: 'getSpaceContentStates',
    description: `Get content states that are suggested in the space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.array(ContentState),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have space admin permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the space with given key can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/state/content',
    alias: 'getContentsWithState',
    description: `Returns all content that has the provided content state in a space.

If the expand query parameter is used with the &#x60;body.export_view&#x60; and/or &#x60;body.styled_view&#x60; properties, then the query limit parameter will be restricted to a maximum value of 25.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'state-id',
        type: 'Query',
        schema: z.number().int(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.string()).optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).lte(100).optional().default(25),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional(),
      },
    ],
    response: ContentArray,
    errors: [
      {
        status: 400,
        description: `Returned if limit or start are out of range, stateId is omitted.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have space view permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the space with given key can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/state/settings',
    alias: 'getContentStateSettings',
    description: `Get object describing whether content states are allowed at all, if custom content states or space content states
are restricted, and a list of space content states allowed for the space if they are not restricted.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: ContentStateSettings,
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if user does not have space admin permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the space with given key can not be found.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/theme',
    alias: 'getSpaceTheme',
    description: `Returns the theme selected for a space, if one is set. If no space
theme is set, this means that the space is inheriting the global look
and feel settings.

**[Permissions required](https://confluence.atlassian.com/x/_AozKw)**: ‘View’ permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Theme,
    errors: [
      {
        status: 404,
        description: `Returned if any of the following is true:

- There is no space with the given key.
- The space does not have a theme assigned to it.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/space/:spaceKey/theme',
    alias: 'setSpaceTheme',
    description: `Sets the theme for a space. Note, if you want to reset the space theme to
the default Confluence theme, use the &#x27;Reset space theme&#x27; method instead
of this method.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z.object({ themeKey: z.string() }).passthrough(),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: Theme,
    errors: [
      {
        status: 403,
        description: `Returned if the theme key is invalid.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no space with the given key.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/space/:spaceKey/theme',
    alias: 'resetSpaceTheme',
    description: `Resets the space theme. This means that the space will inherit the
global look and feel settings

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 404,
        description: `Returned if there is no space with the given key.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/space/:spaceKey/watch',
    alias: 'getWatchersForSpace',
    description: `Returns a list of watchers of a space`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: SpaceWatchArray,
    errors: [
      {
        status: 404,
        description: `Returned if there is no space with the given key`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/template',
    alias: 'updateContentTemplate',
    description: `Updates a content template. Note, blueprint templates cannot be updated
via the REST API.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space to update a space template or &#x27;Confluence Administrator&#x27;
global permission to update a global template.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The updated content template.`,
        type: 'Body',
        schema: z
          .object({
            templateId: z.string(),
            name: z.string(),
            templateType: z.literal('page'),
            body: ContentTemplateBodyCreate,
            description: z.string().max(100).optional(),
            labels: z.array(Label).optional(),
            space: z.object({ key: z.string() }).passthrough().nullish(),
          })
          .passthrough(),
      },
    ],
    response: ContentTemplate,
    errors: [
      {
        status: 400,
        description: `Returned if template name is null or an empty string.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if the calling user does not have permission to update the
template or if the template doesn&#x27;t exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/template',
    alias: 'createContentTemplate',
    description: `Creates a new content template. Note, blueprint templates cannot be created via the REST API.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Admin&#x27; permission for the space to create a space template or &#x27;Confluence Administrator&#x27;
global permission to create a global template.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The content template to be created.
The content body must be in &#x27;storage&#x27; format.`,
        type: 'Body',
        schema: z
          .object({
            name: z.string(),
            templateType: z.string(),
            body: ContentTemplateBodyCreate,
            description: z.string().max(255).optional(),
            labels: z.array(Label).optional(),
            space: z.object({ key: z.string() }).passthrough().nullish(),
          })
          .passthrough(),
      },
    ],
    response: ContentTemplate,
    errors: [
      {
        status: 400,
        description: `Returned if template name is null or an empty string.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to create the
template.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/template/:contentTemplateId',
    alias: 'getContentTemplate',
    description: `Returns a content template. This includes information about template,
like the name, the space or blueprint that the template is in, the body
of the template, and more.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space to view space templates and permission to
access the Confluence site (&#x27;Can use&#x27; global permission) to view global templates.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentTemplateId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['body', 'body.storage'])).optional(),
      },
    ],
    response: ContentTemplate,
    errors: [
      {
        status: 403,
        description: `Returned if;

- There is no template with the given ID.
- The calling user does not have permission to view the template.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/template/:contentTemplateId',
    alias: 'removeTemplate',
    description: `Deletes a template. This results in different actions depending on the
type of template:

- If the template is a content template, it is deleted.
- If the template is a modified space-level blueprint template, it reverts
to the template inherited from the global-level blueprint template.
- If the template is a modified global-level blueprint template, it reverts
to the default global-level blueprint template.

 Note, unmodified blueprint templates cannot be deleted.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
        &#x27;Admin&#x27; permission for the space to delete a space template or &#x27;Confluence Administrator&#x27;
        global permission to delete a global template.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentTemplateId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- There is no template with the given ID.
- The calling user does not have permission to delete the template.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/template/blueprint',
    alias: 'getBlueprintTemplates',
    description: `Returns all templates provided by blueprints. Use this method to retrieve
all global blueprint templates or all blueprint templates in a space.

Note, all global blueprints are inherited by each space. Space blueprints
can be customised without affecting the global blueprints.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space to view blueprints for the space and permission
to access the Confluence site (&#x27;Can use&#x27; global permission) to view global blueprints.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['body', 'body.storage'])).optional(),
      },
    ],
    response: BlueprintTemplateArray,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view
blueprint templates.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/template/page',
    alias: 'getContentTemplates',
    description: `Returns all content templates. Use this method to retrieve all global
content templates or all content templates in a space.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;View&#x27; permission for the space to view space templates and permission to
access the Confluence site (&#x27;Can use&#x27; global permission) to view global templates.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(25),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.enum(['body', 'body.storage'])).optional(),
      },
    ],
    response: ContentTemplateArray,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view the
content templates.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user',
    alias: 'getUser',
    description: `Returns a user. This includes information about the user, such as the
display name, account ID, profile picture, and more. The information returned may be
restricted by the user&#x27;s profile visibility settings.

**Note:** to add, edit, or delete users in your organization, see the
[user management REST API](/cloud/admin/user-management/about/).

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator']))
          .optional(),
      },
    ],
    response: z
      .object({
        type: z.enum(['known', 'unknown', 'anonymous', 'user']),
        username: GenericUserName.nullish(),
        userKey: GenericUserKey.nullish(),
        accountId: GenericAccountId.nullish(),
        accountType: z.enum(['atlassian', 'app', '']).optional(),
        email: z.string().nullish(),
        publicName: z.string().optional(),
        profilePicture: Icon.nullish(),
        displayName: z.string().nullish(),
        timeZone: z.string().nullish(),
        externalCollaborator: z.boolean().optional(),
        isExternalCollaborator: z.boolean().optional(),
        isGuest: z.boolean().optional(),
        operations: z.array(OperationCheckResult).nullish(),
        details: UserDetails.optional(),
        personalSpace: Space.nullish(),
        _expandable: z
          .object({ operations: z.string(), details: z.string(), personalSpace: z.string() })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the calling user does not have permission to view users.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if a user with the given accountId does not exist.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/:userId/property',
    alias: 'getUserProperties',
    description: `Returns the properties for a user as list of property keys. For more information
about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).
&#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).lte(25).optional().default(5),
      },
    ],
    response: UserPropertyKeyArray,
    errors: [
      {
        status: 400,
        description: `Returned if request has malformed syntax or userId is not a valid user id.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have the correct permissions.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no user with the given user ID.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/:userId/property/:key',
    alias: 'getUserProperty',
    description: `Returns the property corresponding to &#x60;key&#x60; for a user. For more information
about user properties, see [Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).
&#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Path',
        schema: z.string().regex(/^[-_a-zA-Z0-9]+$/),
      },
    ],
    response: UserProperty,
    errors: [
      {
        status: 400,
        description: `Returned if;

- The key is too long.
- Request has malformed syntax or userId is not a valid user id.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have the correct permissions.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no user with the given user ID
- There is no user property with the given key`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'put',
    path: '/wiki/rest/api/user/:userId/property/:key',
    alias: 'updateUserProperty',
    description: `Updates a property for the given user. Note, you cannot update the key of a user property, only the value.
For more information about user properties, see
[Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).
&#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The user property to be updated.`,
        type: 'Body',
        schema: z.object({ value: z.object({}).partial().passthrough() }),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Path',
        schema: z.string().regex(/^[-_a-zA-Z0-9]+$/),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- The key is too long.
- The value is empty.
- The value is too long.
- Request has malformed syntax or userId is not a valid user id.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have the correct permissions.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no user property with the given key.
- There is no user with the given user id.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/user/:userId/property/:key',
    alias: 'createUserProperty',
    description: `Creates a property for a user. For more information  about user properties, see [Confluence entity properties]
(https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).
&#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.

&#x60;Note:&#x60; the number of properties which could be created per app in a tenant for each user might be
restricted by fixed system limits.
**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        description: `The user property to be created.`,
        type: 'Body',
        schema: z.object({ value: z.object({}).partial().passthrough() }),
      },
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Path',
        schema: z.string().regex(/^[-_a-zA-Z0-9]+$/),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- The key is too long.
- The value is empty.
- The value is too long.
- Request has malformed syntax or userId is not a valid user id.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have the correct permissions.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if there is no user with the given user id.`,
        schema: z.void(),
      },
      {
        status: 409,
        description: `Returned if the key already exists for the user.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/user/:userId/property/:key',
    alias: 'deleteUserProperty',
    description: `Deletes a property for the given user.
For more information about user properties, see
[Confluence entity properties](https://developer.atlassian.com/cloud/confluence/confluence-entity-properties/).
&#x60;Note&#x60;, these properties stored against a user are on a Confluence site level and not space/content level.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'userId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Path',
        schema: z.string().regex(/^[-_a-zA-Z0-9]+$/),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Returned if;

- The key is too long.
- Request has malformed syntax or userId is not a valid user id.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing from the request.`,
        schema: z.void(),
      },
      {
        status: 403,
        description: `Returned if the user does not have the correct permissions.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if;

- There is no user property with the given key
- There is no user with the given user id`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/anonymous',
    alias: 'getAnonymousUser',
    description: `Returns information about how anonymous users are represented, like the
profile picture and display name.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'expand',
        type: 'Query',
        schema: z.array(z.literal('operations')).optional(),
      },
    ],
    response: UserAnonymous,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to use
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/bulk',
    alias: 'getBulkUserLookup',
    description: `Returns user details for the ids provided in the request.
Currently this API returns a maximum of 100 results.
If more than 100 account ids are passed in, then the first 100 will be returned.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator']))
          .optional(),
      },
    ],
    response: BulkUserLookupArray,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to use
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/current',
    alias: 'getCurrentUser',
    description: `Returns the currently logged-in user. This includes information about
the user, like the display name, userKey, account ID, profile picture,
and more.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'expand',
        type: 'Query',
        schema: z
          .array(z.enum(['operations', 'personalSpace', 'isExternalCollaborator']))
          .optional(),
      },
    ],
    response: z
      .object({
        type: z.enum(['known', 'unknown', 'anonymous', 'user']),
        username: GenericUserName.nullish(),
        userKey: GenericUserKey.nullish(),
        accountId: GenericAccountId.nullish(),
        accountType: z.enum(['atlassian', 'app', '']).optional(),
        email: z.string().nullish(),
        publicName: z.string().optional(),
        profilePicture: Icon.nullish(),
        displayName: z.string().nullish(),
        timeZone: z.string().nullish(),
        externalCollaborator: z.boolean().optional(),
        isExternalCollaborator: z.boolean().optional(),
        isGuest: z.boolean().optional(),
        operations: z.array(OperationCheckResult).nullish(),
        details: UserDetails.optional(),
        personalSpace: Space.nullish(),
        _expandable: z
          .object({ operations: z.string(), details: z.string(), personalSpace: z.string() })
          .partial()
          .passthrough()
          .optional(),
        _links: GenericLinks.optional(),
      })
      .passthrough()
      .nullable(),
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to use
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/email',
    alias: 'getPrivacyUnsafeUserEmail',
    description: `Returns a user&#x27;s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by
Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
For Forge apps, this API only supports access via asApp() requests.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
      },
    ],
    response: AccountIdEmailRecord,
    errors: [
      {
        status: 400,
        description: `Returned if the calling app is not approved to use this API.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if a user with the given accountId does not exist.`,
        schema: z.void(),
      },
      {
        status: 501,
        description: `Indicates that the API is not currently enabled.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/email/bulk',
    alias: 'getPrivacyUnsafeUserEmailBulk',
    description: `Returns a user&#x27;s email address regardless of the user’s profile visibility settings. For Connect apps, this API is only available to apps approved by
Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
For Forge apps, this API only supports access via asApp() requests.

Any accounts which are not available will not be included in the result.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.array(z.string()),
      },
    ],
    response: z.array(AccountIdEmailRecord),
    errors: [
      {
        status: 400,
        description: `Returned if the calling app is not approved to use this API.`,
        schema: z.void(),
      },
      {
        status: 401,
        description: `Returned if the authentication credentials are incorrect or missing
from the request.`,
        schema: z.void(),
      },
      {
        status: 501,
        description: `Indicates that the API is not currently enabled.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/memberof',
    alias: 'getGroupMembershipsForUser',
    description: `Returns the groups that a user is a member of.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
Permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string(),
      },
      {
        name: 'start',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(0),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(0).optional().default(200),
      },
    ],
    response: GroupArrayWithLinks,
    errors: [
      {
        status: 403,
        description: `Returned if the calling user does not have permission to use
Confluence.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/watch/content/:contentId',
    alias: 'getContentWatchStatus',
    description: `Returns whether a user is watching a piece of content. Choose the user by
doing one of the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.object({ watching: z.boolean() }).passthrough(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The calling user does not have permission to view the
content.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No content exists for the specified &#x60;contentId&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;contentId&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/user/watch/content/:contentId',
    alias: 'addContentWatcher',
    description: `Adds a user as a watcher to a piece of content. Choose the user by doing
one of the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a
request, as this operation has XSRF protection.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'contentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- The calling user does not have permission to view the
content.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No content exists for the specified &#x60;contentId&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;contentId&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/user/watch/content/:contentId',
    alias: 'removeContentWatcher',
    description: `Removes a user as a watcher from a piece of content. Choose the user by
doing one of the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'X-Atlassian-Token',
        type: 'Header',
        schema: z.string().default('no-check'),
      },
      {
        name: 'contentId',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- The calling user does not have permission to view the
content.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No content exists for the specified &#x60;contentId&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;contentId&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/watch/label/:labelName',
    alias: 'isWatchingLabel',
    description: `Returns whether a user is watching a label. Choose the user by doing one
of the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'labelName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.object({ watching: z.boolean() }).passthrough(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No label exists for the specified &#x60;labelName&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;labelName&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/user/watch/label/:labelName',
    alias: 'addLabelWatcher',
    description: `Adds a user as a watcher to a label. Choose the user by doing one of the
following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a
request, as this operation has XSRF protection.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'X-Atlassian-Token',
        type: 'Header',
        schema: z.string().default('no-check'),
      },
      {
        name: 'labelName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No label exists for the specified &#x60;labelName&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;labelName&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/user/watch/label/:labelName',
    alias: 'removeLabelWatcher',
    description: `Removes a user as a watcher from a label. Choose the user by doing one of
the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'labelName',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No label exists for the specified &#x60;labelName&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;labelName&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'get',
    path: '/wiki/rest/api/user/watch/space/:spaceKey',
    alias: 'isWatchingSpace',
    description: `Returns whether a user is watching a space. Choose the user by
doing one of the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.object({ watching: z.boolean() }).passthrough(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The calling user does not have permission to view the
space.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No space exists for the specified &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;spaceKey&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'post',
    path: '/wiki/rest/api/user/watch/space/:spaceKey',
    alias: 'addSpaceWatcher',
    description: `Adds a user as a watcher to a space. Choose the user by doing one of the
following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

Note, you must add the &#x60;X-Atlassian-Token: no-check&#x60; header when making a
request, as this operation has XSRF protection.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'X-Atlassian-Token',
        type: 'Header',
        schema: z.string().default('no-check'),
      },
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- The calling user does not have permission to view the
space.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No space exists for the specified &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;spaceKey&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
  {
    method: 'delete',
    path: '/wiki/rest/api/user/watch/space/:spaceKey',
    alias: 'removeSpaceWatch',
    description: `Removes a user as a watcher from a space. Choose the user by doing one of
the following:

- Specify a user via a query parameter: Use the &#x60;accountId&#x60; to identify the user.
- Do not specify a user: The currently logged-in user will be used.

**[Permissions](https://confluence.atlassian.com/x/_AozKw) required**:
&#x27;Confluence Administrator&#x27; global permission if specifying a user, otherwise
permission to access the Confluence site (&#x27;Can use&#x27; global permission).`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'spaceKey',
        type: 'Path',
        schema: z.string(),
      },
      {
        name: 'key',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'username',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'accountId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 403,
        description: `Returned if;

- The &#x60;X-Atlassian-Token: no-check&#x60; header is not specified.
- The calling user does not have permission to view the space.
- A user is specified via a query parameter and the calling user is
not a Confluence administrator.
- No space exists for the specified &#x60;spaceKey&#x60;.`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Returned if no &#x60;spaceKey&#x60; is specified.`,
        schema: z.void(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
