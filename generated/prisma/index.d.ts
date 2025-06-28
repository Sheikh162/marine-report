
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reports
 * const reports = await prisma.report.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Reports
   * const reports = await prisma.report.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Report: 'Report'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    yearBuilt: number | null
    totalCrewOnBoard: number | null
    deaths: number | null
    injured: number | null
  }

  export type ReportSumAggregateOutputType = {
    yearBuilt: number | null
    totalCrewOnBoard: number | null
    deaths: number | null
    injured: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    shipName: string | null
    imoNumber: string | null
    incidentDate: Date | null
    reportedAt: Date | null
    dpaName: string | null
    dpaPhone: string | null
    dpaMobile: string | null
    dpaEmail: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    flag: string | null
    shipType: string | null
    registrationType: string | null
    positionOfVessel: string | null
    locationOfVessel: string | null
    areaOfIncident: string | null
    yearBuilt: number | null
    deadweight: string | null
    gt: string | null
    maxDraft: string | null
    classificationSociety: string | null
    piClub: string | null
    hullMachineryUnderwriters: string | null
    totalCrewOnBoard: number | null
    conditionLoadedBallast: string | null
    severityOfIncident: string | null
    lastPortOfCall: string | null
    freeboard: string | null
    cargoTypeQty: string | null
    bunkers: string | null
    ownershipType: string | null
    techManagerName: string | null
    techManagerAddress: string | null
    techManagerPhone: string | null
    techManagerEmail: string | null
    rpsAgencyName: string | null
    rpsAgencyContactName: string | null
    rpsAgencyPhone: string | null
    rpsAgencyEmail: string | null
    localAgencyName: string | null
    localAgencyContactName: string | null
    localAgencyPhone: string | null
    localAgencyEmail: string | null
    incidentCategory: string | null
    incidentConsequences: string | null
    deaths: number | null
    injured: number | null
    deceasedDetails: string | null
    summaryIncident: string | null
    summaryAction: string | null
    lessonsLearnt: string | null
    sarRequired: string | null
    oilPollutionExtent: string | null
    weatherConditions: string | null
    tidalConditions: string | null
    oilSpilledVolume: string | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    shipName: string | null
    imoNumber: string | null
    incidentDate: Date | null
    reportedAt: Date | null
    dpaName: string | null
    dpaPhone: string | null
    dpaMobile: string | null
    dpaEmail: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    flag: string | null
    shipType: string | null
    registrationType: string | null
    positionOfVessel: string | null
    locationOfVessel: string | null
    areaOfIncident: string | null
    yearBuilt: number | null
    deadweight: string | null
    gt: string | null
    maxDraft: string | null
    classificationSociety: string | null
    piClub: string | null
    hullMachineryUnderwriters: string | null
    totalCrewOnBoard: number | null
    conditionLoadedBallast: string | null
    severityOfIncident: string | null
    lastPortOfCall: string | null
    freeboard: string | null
    cargoTypeQty: string | null
    bunkers: string | null
    ownershipType: string | null
    techManagerName: string | null
    techManagerAddress: string | null
    techManagerPhone: string | null
    techManagerEmail: string | null
    rpsAgencyName: string | null
    rpsAgencyContactName: string | null
    rpsAgencyPhone: string | null
    rpsAgencyEmail: string | null
    localAgencyName: string | null
    localAgencyContactName: string | null
    localAgencyPhone: string | null
    localAgencyEmail: string | null
    incidentCategory: string | null
    incidentConsequences: string | null
    deaths: number | null
    injured: number | null
    deceasedDetails: string | null
    summaryIncident: string | null
    summaryAction: string | null
    lessonsLearnt: string | null
    sarRequired: string | null
    oilPollutionExtent: string | null
    weatherConditions: string | null
    tidalConditions: string | null
    oilSpilledVolume: string | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    shipName: number
    imoNumber: number
    incidentDate: number
    reportedAt: number
    dpaName: number
    dpaPhone: number
    dpaMobile: number
    dpaEmail: number
    userId: number
    createdAt: number
    updatedAt: number
    mediaUrls: number
    flag: number
    shipType: number
    registrationType: number
    positionOfVessel: number
    locationOfVessel: number
    areaOfIncident: number
    yearBuilt: number
    deadweight: number
    gt: number
    maxDraft: number
    classificationSociety: number
    piClub: number
    hullMachineryUnderwriters: number
    totalCrewOnBoard: number
    conditionLoadedBallast: number
    severityOfIncident: number
    lastPortOfCall: number
    freeboard: number
    cargoTypeQty: number
    bunkers: number
    ownershipType: number
    techManagerName: number
    techManagerAddress: number
    techManagerPhone: number
    techManagerEmail: number
    rpsAgencyName: number
    rpsAgencyContactName: number
    rpsAgencyPhone: number
    rpsAgencyEmail: number
    localAgencyName: number
    localAgencyContactName: number
    localAgencyPhone: number
    localAgencyEmail: number
    incidentCategory: number
    incidentConsequences: number
    deaths: number
    injured: number
    deceasedDetails: number
    summaryIncident: number
    summaryAction: number
    lessonsLearnt: number
    sarRequired: number
    oilPollutionExtent: number
    weatherConditions: number
    tidalConditions: number
    oilSpilledVolume: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    yearBuilt?: true
    totalCrewOnBoard?: true
    deaths?: true
    injured?: true
  }

  export type ReportSumAggregateInputType = {
    yearBuilt?: true
    totalCrewOnBoard?: true
    deaths?: true
    injured?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    shipName?: true
    imoNumber?: true
    incidentDate?: true
    reportedAt?: true
    dpaName?: true
    dpaPhone?: true
    dpaMobile?: true
    dpaEmail?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    flag?: true
    shipType?: true
    registrationType?: true
    positionOfVessel?: true
    locationOfVessel?: true
    areaOfIncident?: true
    yearBuilt?: true
    deadweight?: true
    gt?: true
    maxDraft?: true
    classificationSociety?: true
    piClub?: true
    hullMachineryUnderwriters?: true
    totalCrewOnBoard?: true
    conditionLoadedBallast?: true
    severityOfIncident?: true
    lastPortOfCall?: true
    freeboard?: true
    cargoTypeQty?: true
    bunkers?: true
    ownershipType?: true
    techManagerName?: true
    techManagerAddress?: true
    techManagerPhone?: true
    techManagerEmail?: true
    rpsAgencyName?: true
    rpsAgencyContactName?: true
    rpsAgencyPhone?: true
    rpsAgencyEmail?: true
    localAgencyName?: true
    localAgencyContactName?: true
    localAgencyPhone?: true
    localAgencyEmail?: true
    incidentCategory?: true
    incidentConsequences?: true
    deaths?: true
    injured?: true
    deceasedDetails?: true
    summaryIncident?: true
    summaryAction?: true
    lessonsLearnt?: true
    sarRequired?: true
    oilPollutionExtent?: true
    weatherConditions?: true
    tidalConditions?: true
    oilSpilledVolume?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    shipName?: true
    imoNumber?: true
    incidentDate?: true
    reportedAt?: true
    dpaName?: true
    dpaPhone?: true
    dpaMobile?: true
    dpaEmail?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    flag?: true
    shipType?: true
    registrationType?: true
    positionOfVessel?: true
    locationOfVessel?: true
    areaOfIncident?: true
    yearBuilt?: true
    deadweight?: true
    gt?: true
    maxDraft?: true
    classificationSociety?: true
    piClub?: true
    hullMachineryUnderwriters?: true
    totalCrewOnBoard?: true
    conditionLoadedBallast?: true
    severityOfIncident?: true
    lastPortOfCall?: true
    freeboard?: true
    cargoTypeQty?: true
    bunkers?: true
    ownershipType?: true
    techManagerName?: true
    techManagerAddress?: true
    techManagerPhone?: true
    techManagerEmail?: true
    rpsAgencyName?: true
    rpsAgencyContactName?: true
    rpsAgencyPhone?: true
    rpsAgencyEmail?: true
    localAgencyName?: true
    localAgencyContactName?: true
    localAgencyPhone?: true
    localAgencyEmail?: true
    incidentCategory?: true
    incidentConsequences?: true
    deaths?: true
    injured?: true
    deceasedDetails?: true
    summaryIncident?: true
    summaryAction?: true
    lessonsLearnt?: true
    sarRequired?: true
    oilPollutionExtent?: true
    weatherConditions?: true
    tidalConditions?: true
    oilSpilledVolume?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    shipName?: true
    imoNumber?: true
    incidentDate?: true
    reportedAt?: true
    dpaName?: true
    dpaPhone?: true
    dpaMobile?: true
    dpaEmail?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    mediaUrls?: true
    flag?: true
    shipType?: true
    registrationType?: true
    positionOfVessel?: true
    locationOfVessel?: true
    areaOfIncident?: true
    yearBuilt?: true
    deadweight?: true
    gt?: true
    maxDraft?: true
    classificationSociety?: true
    piClub?: true
    hullMachineryUnderwriters?: true
    totalCrewOnBoard?: true
    conditionLoadedBallast?: true
    severityOfIncident?: true
    lastPortOfCall?: true
    freeboard?: true
    cargoTypeQty?: true
    bunkers?: true
    ownershipType?: true
    techManagerName?: true
    techManagerAddress?: true
    techManagerPhone?: true
    techManagerEmail?: true
    rpsAgencyName?: true
    rpsAgencyContactName?: true
    rpsAgencyPhone?: true
    rpsAgencyEmail?: true
    localAgencyName?: true
    localAgencyContactName?: true
    localAgencyPhone?: true
    localAgencyEmail?: true
    incidentCategory?: true
    incidentConsequences?: true
    deaths?: true
    injured?: true
    deceasedDetails?: true
    summaryIncident?: true
    summaryAction?: true
    lessonsLearnt?: true
    sarRequired?: true
    oilPollutionExtent?: true
    weatherConditions?: true
    tidalConditions?: true
    oilSpilledVolume?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    shipName: string
    imoNumber: string
    incidentDate: Date
    reportedAt: Date
    dpaName: string
    dpaPhone: string
    dpaMobile: string
    dpaEmail: string
    userId: string
    createdAt: Date
    updatedAt: Date
    mediaUrls: string[]
    flag: string | null
    shipType: string | null
    registrationType: string | null
    positionOfVessel: string | null
    locationOfVessel: string | null
    areaOfIncident: string | null
    yearBuilt: number | null
    deadweight: string | null
    gt: string | null
    maxDraft: string | null
    classificationSociety: string | null
    piClub: string | null
    hullMachineryUnderwriters: string | null
    totalCrewOnBoard: number | null
    conditionLoadedBallast: string | null
    severityOfIncident: string | null
    lastPortOfCall: string | null
    freeboard: string | null
    cargoTypeQty: string | null
    bunkers: string | null
    ownershipType: string | null
    techManagerName: string | null
    techManagerAddress: string | null
    techManagerPhone: string | null
    techManagerEmail: string | null
    rpsAgencyName: string | null
    rpsAgencyContactName: string | null
    rpsAgencyPhone: string | null
    rpsAgencyEmail: string | null
    localAgencyName: string | null
    localAgencyContactName: string | null
    localAgencyPhone: string | null
    localAgencyEmail: string | null
    incidentCategory: string | null
    incidentConsequences: string | null
    deaths: number | null
    injured: number | null
    deceasedDetails: string | null
    summaryIncident: string | null
    summaryAction: string | null
    lessonsLearnt: string | null
    sarRequired: string | null
    oilPollutionExtent: string | null
    weatherConditions: string | null
    tidalConditions: string | null
    oilSpilledVolume: string | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipName?: boolean
    imoNumber?: boolean
    incidentDate?: boolean
    reportedAt?: boolean
    dpaName?: boolean
    dpaPhone?: boolean
    dpaMobile?: boolean
    dpaEmail?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaUrls?: boolean
    flag?: boolean
    shipType?: boolean
    registrationType?: boolean
    positionOfVessel?: boolean
    locationOfVessel?: boolean
    areaOfIncident?: boolean
    yearBuilt?: boolean
    deadweight?: boolean
    gt?: boolean
    maxDraft?: boolean
    classificationSociety?: boolean
    piClub?: boolean
    hullMachineryUnderwriters?: boolean
    totalCrewOnBoard?: boolean
    conditionLoadedBallast?: boolean
    severityOfIncident?: boolean
    lastPortOfCall?: boolean
    freeboard?: boolean
    cargoTypeQty?: boolean
    bunkers?: boolean
    ownershipType?: boolean
    techManagerName?: boolean
    techManagerAddress?: boolean
    techManagerPhone?: boolean
    techManagerEmail?: boolean
    rpsAgencyName?: boolean
    rpsAgencyContactName?: boolean
    rpsAgencyPhone?: boolean
    rpsAgencyEmail?: boolean
    localAgencyName?: boolean
    localAgencyContactName?: boolean
    localAgencyPhone?: boolean
    localAgencyEmail?: boolean
    incidentCategory?: boolean
    incidentConsequences?: boolean
    deaths?: boolean
    injured?: boolean
    deceasedDetails?: boolean
    summaryIncident?: boolean
    summaryAction?: boolean
    lessonsLearnt?: boolean
    sarRequired?: boolean
    oilPollutionExtent?: boolean
    weatherConditions?: boolean
    tidalConditions?: boolean
    oilSpilledVolume?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipName?: boolean
    imoNumber?: boolean
    incidentDate?: boolean
    reportedAt?: boolean
    dpaName?: boolean
    dpaPhone?: boolean
    dpaMobile?: boolean
    dpaEmail?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaUrls?: boolean
    flag?: boolean
    shipType?: boolean
    registrationType?: boolean
    positionOfVessel?: boolean
    locationOfVessel?: boolean
    areaOfIncident?: boolean
    yearBuilt?: boolean
    deadweight?: boolean
    gt?: boolean
    maxDraft?: boolean
    classificationSociety?: boolean
    piClub?: boolean
    hullMachineryUnderwriters?: boolean
    totalCrewOnBoard?: boolean
    conditionLoadedBallast?: boolean
    severityOfIncident?: boolean
    lastPortOfCall?: boolean
    freeboard?: boolean
    cargoTypeQty?: boolean
    bunkers?: boolean
    ownershipType?: boolean
    techManagerName?: boolean
    techManagerAddress?: boolean
    techManagerPhone?: boolean
    techManagerEmail?: boolean
    rpsAgencyName?: boolean
    rpsAgencyContactName?: boolean
    rpsAgencyPhone?: boolean
    rpsAgencyEmail?: boolean
    localAgencyName?: boolean
    localAgencyContactName?: boolean
    localAgencyPhone?: boolean
    localAgencyEmail?: boolean
    incidentCategory?: boolean
    incidentConsequences?: boolean
    deaths?: boolean
    injured?: boolean
    deceasedDetails?: boolean
    summaryIncident?: boolean
    summaryAction?: boolean
    lessonsLearnt?: boolean
    sarRequired?: boolean
    oilPollutionExtent?: boolean
    weatherConditions?: boolean
    tidalConditions?: boolean
    oilSpilledVolume?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipName?: boolean
    imoNumber?: boolean
    incidentDate?: boolean
    reportedAt?: boolean
    dpaName?: boolean
    dpaPhone?: boolean
    dpaMobile?: boolean
    dpaEmail?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaUrls?: boolean
    flag?: boolean
    shipType?: boolean
    registrationType?: boolean
    positionOfVessel?: boolean
    locationOfVessel?: boolean
    areaOfIncident?: boolean
    yearBuilt?: boolean
    deadweight?: boolean
    gt?: boolean
    maxDraft?: boolean
    classificationSociety?: boolean
    piClub?: boolean
    hullMachineryUnderwriters?: boolean
    totalCrewOnBoard?: boolean
    conditionLoadedBallast?: boolean
    severityOfIncident?: boolean
    lastPortOfCall?: boolean
    freeboard?: boolean
    cargoTypeQty?: boolean
    bunkers?: boolean
    ownershipType?: boolean
    techManagerName?: boolean
    techManagerAddress?: boolean
    techManagerPhone?: boolean
    techManagerEmail?: boolean
    rpsAgencyName?: boolean
    rpsAgencyContactName?: boolean
    rpsAgencyPhone?: boolean
    rpsAgencyEmail?: boolean
    localAgencyName?: boolean
    localAgencyContactName?: boolean
    localAgencyPhone?: boolean
    localAgencyEmail?: boolean
    incidentCategory?: boolean
    incidentConsequences?: boolean
    deaths?: boolean
    injured?: boolean
    deceasedDetails?: boolean
    summaryIncident?: boolean
    summaryAction?: boolean
    lessonsLearnt?: boolean
    sarRequired?: boolean
    oilPollutionExtent?: boolean
    weatherConditions?: boolean
    tidalConditions?: boolean
    oilSpilledVolume?: boolean
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    shipName?: boolean
    imoNumber?: boolean
    incidentDate?: boolean
    reportedAt?: boolean
    dpaName?: boolean
    dpaPhone?: boolean
    dpaMobile?: boolean
    dpaEmail?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mediaUrls?: boolean
    flag?: boolean
    shipType?: boolean
    registrationType?: boolean
    positionOfVessel?: boolean
    locationOfVessel?: boolean
    areaOfIncident?: boolean
    yearBuilt?: boolean
    deadweight?: boolean
    gt?: boolean
    maxDraft?: boolean
    classificationSociety?: boolean
    piClub?: boolean
    hullMachineryUnderwriters?: boolean
    totalCrewOnBoard?: boolean
    conditionLoadedBallast?: boolean
    severityOfIncident?: boolean
    lastPortOfCall?: boolean
    freeboard?: boolean
    cargoTypeQty?: boolean
    bunkers?: boolean
    ownershipType?: boolean
    techManagerName?: boolean
    techManagerAddress?: boolean
    techManagerPhone?: boolean
    techManagerEmail?: boolean
    rpsAgencyName?: boolean
    rpsAgencyContactName?: boolean
    rpsAgencyPhone?: boolean
    rpsAgencyEmail?: boolean
    localAgencyName?: boolean
    localAgencyContactName?: boolean
    localAgencyPhone?: boolean
    localAgencyEmail?: boolean
    incidentCategory?: boolean
    incidentConsequences?: boolean
    deaths?: boolean
    injured?: boolean
    deceasedDetails?: boolean
    summaryIncident?: boolean
    summaryAction?: boolean
    lessonsLearnt?: boolean
    sarRequired?: boolean
    oilPollutionExtent?: boolean
    weatherConditions?: boolean
    tidalConditions?: boolean
    oilSpilledVolume?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipName" | "imoNumber" | "incidentDate" | "reportedAt" | "dpaName" | "dpaPhone" | "dpaMobile" | "dpaEmail" | "userId" | "createdAt" | "updatedAt" | "mediaUrls" | "flag" | "shipType" | "registrationType" | "positionOfVessel" | "locationOfVessel" | "areaOfIncident" | "yearBuilt" | "deadweight" | "gt" | "maxDraft" | "classificationSociety" | "piClub" | "hullMachineryUnderwriters" | "totalCrewOnBoard" | "conditionLoadedBallast" | "severityOfIncident" | "lastPortOfCall" | "freeboard" | "cargoTypeQty" | "bunkers" | "ownershipType" | "techManagerName" | "techManagerAddress" | "techManagerPhone" | "techManagerEmail" | "rpsAgencyName" | "rpsAgencyContactName" | "rpsAgencyPhone" | "rpsAgencyEmail" | "localAgencyName" | "localAgencyContactName" | "localAgencyPhone" | "localAgencyEmail" | "incidentCategory" | "incidentConsequences" | "deaths" | "injured" | "deceasedDetails" | "summaryIncident" | "summaryAction" | "lessonsLearnt" | "sarRequired" | "oilPollutionExtent" | "weatherConditions" | "tidalConditions" | "oilSpilledVolume", ExtArgs["result"]["report"]>

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipName: string
      imoNumber: string
      incidentDate: Date
      reportedAt: Date
      dpaName: string
      dpaPhone: string
      dpaMobile: string
      dpaEmail: string
      userId: string
      createdAt: Date
      updatedAt: Date
      mediaUrls: string[]
      flag: string | null
      shipType: string | null
      registrationType: string | null
      positionOfVessel: string | null
      locationOfVessel: string | null
      areaOfIncident: string | null
      yearBuilt: number | null
      deadweight: string | null
      gt: string | null
      maxDraft: string | null
      classificationSociety: string | null
      piClub: string | null
      hullMachineryUnderwriters: string | null
      totalCrewOnBoard: number | null
      conditionLoadedBallast: string | null
      severityOfIncident: string | null
      lastPortOfCall: string | null
      freeboard: string | null
      cargoTypeQty: string | null
      bunkers: string | null
      ownershipType: string | null
      techManagerName: string | null
      techManagerAddress: string | null
      techManagerPhone: string | null
      techManagerEmail: string | null
      rpsAgencyName: string | null
      rpsAgencyContactName: string | null
      rpsAgencyPhone: string | null
      rpsAgencyEmail: string | null
      localAgencyName: string | null
      localAgencyContactName: string | null
      localAgencyPhone: string | null
      localAgencyEmail: string | null
      incidentCategory: string | null
      incidentConsequences: string | null
      deaths: number | null
      injured: number | null
      deceasedDetails: string | null
      summaryIncident: string | null
      summaryAction: string | null
      lessonsLearnt: string | null
      sarRequired: string | null
      oilPollutionExtent: string | null
      weatherConditions: string | null
      tidalConditions: string | null
      oilSpilledVolume: string | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly shipName: FieldRef<"Report", 'String'>
    readonly imoNumber: FieldRef<"Report", 'String'>
    readonly incidentDate: FieldRef<"Report", 'DateTime'>
    readonly reportedAt: FieldRef<"Report", 'DateTime'>
    readonly dpaName: FieldRef<"Report", 'String'>
    readonly dpaPhone: FieldRef<"Report", 'String'>
    readonly dpaMobile: FieldRef<"Report", 'String'>
    readonly dpaEmail: FieldRef<"Report", 'String'>
    readonly userId: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
    readonly mediaUrls: FieldRef<"Report", 'String[]'>
    readonly flag: FieldRef<"Report", 'String'>
    readonly shipType: FieldRef<"Report", 'String'>
    readonly registrationType: FieldRef<"Report", 'String'>
    readonly positionOfVessel: FieldRef<"Report", 'String'>
    readonly locationOfVessel: FieldRef<"Report", 'String'>
    readonly areaOfIncident: FieldRef<"Report", 'String'>
    readonly yearBuilt: FieldRef<"Report", 'Int'>
    readonly deadweight: FieldRef<"Report", 'String'>
    readonly gt: FieldRef<"Report", 'String'>
    readonly maxDraft: FieldRef<"Report", 'String'>
    readonly classificationSociety: FieldRef<"Report", 'String'>
    readonly piClub: FieldRef<"Report", 'String'>
    readonly hullMachineryUnderwriters: FieldRef<"Report", 'String'>
    readonly totalCrewOnBoard: FieldRef<"Report", 'Int'>
    readonly conditionLoadedBallast: FieldRef<"Report", 'String'>
    readonly severityOfIncident: FieldRef<"Report", 'String'>
    readonly lastPortOfCall: FieldRef<"Report", 'String'>
    readonly freeboard: FieldRef<"Report", 'String'>
    readonly cargoTypeQty: FieldRef<"Report", 'String'>
    readonly bunkers: FieldRef<"Report", 'String'>
    readonly ownershipType: FieldRef<"Report", 'String'>
    readonly techManagerName: FieldRef<"Report", 'String'>
    readonly techManagerAddress: FieldRef<"Report", 'String'>
    readonly techManagerPhone: FieldRef<"Report", 'String'>
    readonly techManagerEmail: FieldRef<"Report", 'String'>
    readonly rpsAgencyName: FieldRef<"Report", 'String'>
    readonly rpsAgencyContactName: FieldRef<"Report", 'String'>
    readonly rpsAgencyPhone: FieldRef<"Report", 'String'>
    readonly rpsAgencyEmail: FieldRef<"Report", 'String'>
    readonly localAgencyName: FieldRef<"Report", 'String'>
    readonly localAgencyContactName: FieldRef<"Report", 'String'>
    readonly localAgencyPhone: FieldRef<"Report", 'String'>
    readonly localAgencyEmail: FieldRef<"Report", 'String'>
    readonly incidentCategory: FieldRef<"Report", 'String'>
    readonly incidentConsequences: FieldRef<"Report", 'String'>
    readonly deaths: FieldRef<"Report", 'Int'>
    readonly injured: FieldRef<"Report", 'Int'>
    readonly deceasedDetails: FieldRef<"Report", 'String'>
    readonly summaryIncident: FieldRef<"Report", 'String'>
    readonly summaryAction: FieldRef<"Report", 'String'>
    readonly lessonsLearnt: FieldRef<"Report", 'String'>
    readonly sarRequired: FieldRef<"Report", 'String'>
    readonly oilPollutionExtent: FieldRef<"Report", 'String'>
    readonly weatherConditions: FieldRef<"Report", 'String'>
    readonly tidalConditions: FieldRef<"Report", 'String'>
    readonly oilSpilledVolume: FieldRef<"Report", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReportScalarFieldEnum: {
    id: 'id',
    shipName: 'shipName',
    imoNumber: 'imoNumber',
    incidentDate: 'incidentDate',
    reportedAt: 'reportedAt',
    dpaName: 'dpaName',
    dpaPhone: 'dpaPhone',
    dpaMobile: 'dpaMobile',
    dpaEmail: 'dpaEmail',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mediaUrls: 'mediaUrls',
    flag: 'flag',
    shipType: 'shipType',
    registrationType: 'registrationType',
    positionOfVessel: 'positionOfVessel',
    locationOfVessel: 'locationOfVessel',
    areaOfIncident: 'areaOfIncident',
    yearBuilt: 'yearBuilt',
    deadweight: 'deadweight',
    gt: 'gt',
    maxDraft: 'maxDraft',
    classificationSociety: 'classificationSociety',
    piClub: 'piClub',
    hullMachineryUnderwriters: 'hullMachineryUnderwriters',
    totalCrewOnBoard: 'totalCrewOnBoard',
    conditionLoadedBallast: 'conditionLoadedBallast',
    severityOfIncident: 'severityOfIncident',
    lastPortOfCall: 'lastPortOfCall',
    freeboard: 'freeboard',
    cargoTypeQty: 'cargoTypeQty',
    bunkers: 'bunkers',
    ownershipType: 'ownershipType',
    techManagerName: 'techManagerName',
    techManagerAddress: 'techManagerAddress',
    techManagerPhone: 'techManagerPhone',
    techManagerEmail: 'techManagerEmail',
    rpsAgencyName: 'rpsAgencyName',
    rpsAgencyContactName: 'rpsAgencyContactName',
    rpsAgencyPhone: 'rpsAgencyPhone',
    rpsAgencyEmail: 'rpsAgencyEmail',
    localAgencyName: 'localAgencyName',
    localAgencyContactName: 'localAgencyContactName',
    localAgencyPhone: 'localAgencyPhone',
    localAgencyEmail: 'localAgencyEmail',
    incidentCategory: 'incidentCategory',
    incidentConsequences: 'incidentConsequences',
    deaths: 'deaths',
    injured: 'injured',
    deceasedDetails: 'deceasedDetails',
    summaryIncident: 'summaryIncident',
    summaryAction: 'summaryAction',
    lessonsLearnt: 'lessonsLearnt',
    sarRequired: 'sarRequired',
    oilPollutionExtent: 'oilPollutionExtent',
    weatherConditions: 'weatherConditions',
    tidalConditions: 'tidalConditions',
    oilSpilledVolume: 'oilSpilledVolume'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    shipName?: StringFilter<"Report"> | string
    imoNumber?: StringFilter<"Report"> | string
    incidentDate?: DateTimeFilter<"Report"> | Date | string
    reportedAt?: DateTimeFilter<"Report"> | Date | string
    dpaName?: StringFilter<"Report"> | string
    dpaPhone?: StringFilter<"Report"> | string
    dpaMobile?: StringFilter<"Report"> | string
    dpaEmail?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    mediaUrls?: StringNullableListFilter<"Report">
    flag?: StringNullableFilter<"Report"> | string | null
    shipType?: StringNullableFilter<"Report"> | string | null
    registrationType?: StringNullableFilter<"Report"> | string | null
    positionOfVessel?: StringNullableFilter<"Report"> | string | null
    locationOfVessel?: StringNullableFilter<"Report"> | string | null
    areaOfIncident?: StringNullableFilter<"Report"> | string | null
    yearBuilt?: IntNullableFilter<"Report"> | number | null
    deadweight?: StringNullableFilter<"Report"> | string | null
    gt?: StringNullableFilter<"Report"> | string | null
    maxDraft?: StringNullableFilter<"Report"> | string | null
    classificationSociety?: StringNullableFilter<"Report"> | string | null
    piClub?: StringNullableFilter<"Report"> | string | null
    hullMachineryUnderwriters?: StringNullableFilter<"Report"> | string | null
    totalCrewOnBoard?: IntNullableFilter<"Report"> | number | null
    conditionLoadedBallast?: StringNullableFilter<"Report"> | string | null
    severityOfIncident?: StringNullableFilter<"Report"> | string | null
    lastPortOfCall?: StringNullableFilter<"Report"> | string | null
    freeboard?: StringNullableFilter<"Report"> | string | null
    cargoTypeQty?: StringNullableFilter<"Report"> | string | null
    bunkers?: StringNullableFilter<"Report"> | string | null
    ownershipType?: StringNullableFilter<"Report"> | string | null
    techManagerName?: StringNullableFilter<"Report"> | string | null
    techManagerAddress?: StringNullableFilter<"Report"> | string | null
    techManagerPhone?: StringNullableFilter<"Report"> | string | null
    techManagerEmail?: StringNullableFilter<"Report"> | string | null
    rpsAgencyName?: StringNullableFilter<"Report"> | string | null
    rpsAgencyContactName?: StringNullableFilter<"Report"> | string | null
    rpsAgencyPhone?: StringNullableFilter<"Report"> | string | null
    rpsAgencyEmail?: StringNullableFilter<"Report"> | string | null
    localAgencyName?: StringNullableFilter<"Report"> | string | null
    localAgencyContactName?: StringNullableFilter<"Report"> | string | null
    localAgencyPhone?: StringNullableFilter<"Report"> | string | null
    localAgencyEmail?: StringNullableFilter<"Report"> | string | null
    incidentCategory?: StringNullableFilter<"Report"> | string | null
    incidentConsequences?: StringNullableFilter<"Report"> | string | null
    deaths?: IntNullableFilter<"Report"> | number | null
    injured?: IntNullableFilter<"Report"> | number | null
    deceasedDetails?: StringNullableFilter<"Report"> | string | null
    summaryIncident?: StringNullableFilter<"Report"> | string | null
    summaryAction?: StringNullableFilter<"Report"> | string | null
    lessonsLearnt?: StringNullableFilter<"Report"> | string | null
    sarRequired?: StringNullableFilter<"Report"> | string | null
    oilPollutionExtent?: StringNullableFilter<"Report"> | string | null
    weatherConditions?: StringNullableFilter<"Report"> | string | null
    tidalConditions?: StringNullableFilter<"Report"> | string | null
    oilSpilledVolume?: StringNullableFilter<"Report"> | string | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    shipName?: SortOrder
    imoNumber?: SortOrder
    incidentDate?: SortOrder
    reportedAt?: SortOrder
    dpaName?: SortOrder
    dpaPhone?: SortOrder
    dpaMobile?: SortOrder
    dpaEmail?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaUrls?: SortOrder
    flag?: SortOrderInput | SortOrder
    shipType?: SortOrderInput | SortOrder
    registrationType?: SortOrderInput | SortOrder
    positionOfVessel?: SortOrderInput | SortOrder
    locationOfVessel?: SortOrderInput | SortOrder
    areaOfIncident?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    deadweight?: SortOrderInput | SortOrder
    gt?: SortOrderInput | SortOrder
    maxDraft?: SortOrderInput | SortOrder
    classificationSociety?: SortOrderInput | SortOrder
    piClub?: SortOrderInput | SortOrder
    hullMachineryUnderwriters?: SortOrderInput | SortOrder
    totalCrewOnBoard?: SortOrderInput | SortOrder
    conditionLoadedBallast?: SortOrderInput | SortOrder
    severityOfIncident?: SortOrderInput | SortOrder
    lastPortOfCall?: SortOrderInput | SortOrder
    freeboard?: SortOrderInput | SortOrder
    cargoTypeQty?: SortOrderInput | SortOrder
    bunkers?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    techManagerName?: SortOrderInput | SortOrder
    techManagerAddress?: SortOrderInput | SortOrder
    techManagerPhone?: SortOrderInput | SortOrder
    techManagerEmail?: SortOrderInput | SortOrder
    rpsAgencyName?: SortOrderInput | SortOrder
    rpsAgencyContactName?: SortOrderInput | SortOrder
    rpsAgencyPhone?: SortOrderInput | SortOrder
    rpsAgencyEmail?: SortOrderInput | SortOrder
    localAgencyName?: SortOrderInput | SortOrder
    localAgencyContactName?: SortOrderInput | SortOrder
    localAgencyPhone?: SortOrderInput | SortOrder
    localAgencyEmail?: SortOrderInput | SortOrder
    incidentCategory?: SortOrderInput | SortOrder
    incidentConsequences?: SortOrderInput | SortOrder
    deaths?: SortOrderInput | SortOrder
    injured?: SortOrderInput | SortOrder
    deceasedDetails?: SortOrderInput | SortOrder
    summaryIncident?: SortOrderInput | SortOrder
    summaryAction?: SortOrderInput | SortOrder
    lessonsLearnt?: SortOrderInput | SortOrder
    sarRequired?: SortOrderInput | SortOrder
    oilPollutionExtent?: SortOrderInput | SortOrder
    weatherConditions?: SortOrderInput | SortOrder
    tidalConditions?: SortOrderInput | SortOrder
    oilSpilledVolume?: SortOrderInput | SortOrder
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    shipName?: StringFilter<"Report"> | string
    imoNumber?: StringFilter<"Report"> | string
    incidentDate?: DateTimeFilter<"Report"> | Date | string
    reportedAt?: DateTimeFilter<"Report"> | Date | string
    dpaName?: StringFilter<"Report"> | string
    dpaPhone?: StringFilter<"Report"> | string
    dpaMobile?: StringFilter<"Report"> | string
    dpaEmail?: StringFilter<"Report"> | string
    userId?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    mediaUrls?: StringNullableListFilter<"Report">
    flag?: StringNullableFilter<"Report"> | string | null
    shipType?: StringNullableFilter<"Report"> | string | null
    registrationType?: StringNullableFilter<"Report"> | string | null
    positionOfVessel?: StringNullableFilter<"Report"> | string | null
    locationOfVessel?: StringNullableFilter<"Report"> | string | null
    areaOfIncident?: StringNullableFilter<"Report"> | string | null
    yearBuilt?: IntNullableFilter<"Report"> | number | null
    deadweight?: StringNullableFilter<"Report"> | string | null
    gt?: StringNullableFilter<"Report"> | string | null
    maxDraft?: StringNullableFilter<"Report"> | string | null
    classificationSociety?: StringNullableFilter<"Report"> | string | null
    piClub?: StringNullableFilter<"Report"> | string | null
    hullMachineryUnderwriters?: StringNullableFilter<"Report"> | string | null
    totalCrewOnBoard?: IntNullableFilter<"Report"> | number | null
    conditionLoadedBallast?: StringNullableFilter<"Report"> | string | null
    severityOfIncident?: StringNullableFilter<"Report"> | string | null
    lastPortOfCall?: StringNullableFilter<"Report"> | string | null
    freeboard?: StringNullableFilter<"Report"> | string | null
    cargoTypeQty?: StringNullableFilter<"Report"> | string | null
    bunkers?: StringNullableFilter<"Report"> | string | null
    ownershipType?: StringNullableFilter<"Report"> | string | null
    techManagerName?: StringNullableFilter<"Report"> | string | null
    techManagerAddress?: StringNullableFilter<"Report"> | string | null
    techManagerPhone?: StringNullableFilter<"Report"> | string | null
    techManagerEmail?: StringNullableFilter<"Report"> | string | null
    rpsAgencyName?: StringNullableFilter<"Report"> | string | null
    rpsAgencyContactName?: StringNullableFilter<"Report"> | string | null
    rpsAgencyPhone?: StringNullableFilter<"Report"> | string | null
    rpsAgencyEmail?: StringNullableFilter<"Report"> | string | null
    localAgencyName?: StringNullableFilter<"Report"> | string | null
    localAgencyContactName?: StringNullableFilter<"Report"> | string | null
    localAgencyPhone?: StringNullableFilter<"Report"> | string | null
    localAgencyEmail?: StringNullableFilter<"Report"> | string | null
    incidentCategory?: StringNullableFilter<"Report"> | string | null
    incidentConsequences?: StringNullableFilter<"Report"> | string | null
    deaths?: IntNullableFilter<"Report"> | number | null
    injured?: IntNullableFilter<"Report"> | number | null
    deceasedDetails?: StringNullableFilter<"Report"> | string | null
    summaryIncident?: StringNullableFilter<"Report"> | string | null
    summaryAction?: StringNullableFilter<"Report"> | string | null
    lessonsLearnt?: StringNullableFilter<"Report"> | string | null
    sarRequired?: StringNullableFilter<"Report"> | string | null
    oilPollutionExtent?: StringNullableFilter<"Report"> | string | null
    weatherConditions?: StringNullableFilter<"Report"> | string | null
    tidalConditions?: StringNullableFilter<"Report"> | string | null
    oilSpilledVolume?: StringNullableFilter<"Report"> | string | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    shipName?: SortOrder
    imoNumber?: SortOrder
    incidentDate?: SortOrder
    reportedAt?: SortOrder
    dpaName?: SortOrder
    dpaPhone?: SortOrder
    dpaMobile?: SortOrder
    dpaEmail?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaUrls?: SortOrder
    flag?: SortOrderInput | SortOrder
    shipType?: SortOrderInput | SortOrder
    registrationType?: SortOrderInput | SortOrder
    positionOfVessel?: SortOrderInput | SortOrder
    locationOfVessel?: SortOrderInput | SortOrder
    areaOfIncident?: SortOrderInput | SortOrder
    yearBuilt?: SortOrderInput | SortOrder
    deadweight?: SortOrderInput | SortOrder
    gt?: SortOrderInput | SortOrder
    maxDraft?: SortOrderInput | SortOrder
    classificationSociety?: SortOrderInput | SortOrder
    piClub?: SortOrderInput | SortOrder
    hullMachineryUnderwriters?: SortOrderInput | SortOrder
    totalCrewOnBoard?: SortOrderInput | SortOrder
    conditionLoadedBallast?: SortOrderInput | SortOrder
    severityOfIncident?: SortOrderInput | SortOrder
    lastPortOfCall?: SortOrderInput | SortOrder
    freeboard?: SortOrderInput | SortOrder
    cargoTypeQty?: SortOrderInput | SortOrder
    bunkers?: SortOrderInput | SortOrder
    ownershipType?: SortOrderInput | SortOrder
    techManagerName?: SortOrderInput | SortOrder
    techManagerAddress?: SortOrderInput | SortOrder
    techManagerPhone?: SortOrderInput | SortOrder
    techManagerEmail?: SortOrderInput | SortOrder
    rpsAgencyName?: SortOrderInput | SortOrder
    rpsAgencyContactName?: SortOrderInput | SortOrder
    rpsAgencyPhone?: SortOrderInput | SortOrder
    rpsAgencyEmail?: SortOrderInput | SortOrder
    localAgencyName?: SortOrderInput | SortOrder
    localAgencyContactName?: SortOrderInput | SortOrder
    localAgencyPhone?: SortOrderInput | SortOrder
    localAgencyEmail?: SortOrderInput | SortOrder
    incidentCategory?: SortOrderInput | SortOrder
    incidentConsequences?: SortOrderInput | SortOrder
    deaths?: SortOrderInput | SortOrder
    injured?: SortOrderInput | SortOrder
    deceasedDetails?: SortOrderInput | SortOrder
    summaryIncident?: SortOrderInput | SortOrder
    summaryAction?: SortOrderInput | SortOrder
    lessonsLearnt?: SortOrderInput | SortOrder
    sarRequired?: SortOrderInput | SortOrder
    oilPollutionExtent?: SortOrderInput | SortOrder
    weatherConditions?: SortOrderInput | SortOrder
    tidalConditions?: SortOrderInput | SortOrder
    oilSpilledVolume?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    shipName?: StringWithAggregatesFilter<"Report"> | string
    imoNumber?: StringWithAggregatesFilter<"Report"> | string
    incidentDate?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    reportedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    dpaName?: StringWithAggregatesFilter<"Report"> | string
    dpaPhone?: StringWithAggregatesFilter<"Report"> | string
    dpaMobile?: StringWithAggregatesFilter<"Report"> | string
    dpaEmail?: StringWithAggregatesFilter<"Report"> | string
    userId?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    mediaUrls?: StringNullableListFilter<"Report">
    flag?: StringNullableWithAggregatesFilter<"Report"> | string | null
    shipType?: StringNullableWithAggregatesFilter<"Report"> | string | null
    registrationType?: StringNullableWithAggregatesFilter<"Report"> | string | null
    positionOfVessel?: StringNullableWithAggregatesFilter<"Report"> | string | null
    locationOfVessel?: StringNullableWithAggregatesFilter<"Report"> | string | null
    areaOfIncident?: StringNullableWithAggregatesFilter<"Report"> | string | null
    yearBuilt?: IntNullableWithAggregatesFilter<"Report"> | number | null
    deadweight?: StringNullableWithAggregatesFilter<"Report"> | string | null
    gt?: StringNullableWithAggregatesFilter<"Report"> | string | null
    maxDraft?: StringNullableWithAggregatesFilter<"Report"> | string | null
    classificationSociety?: StringNullableWithAggregatesFilter<"Report"> | string | null
    piClub?: StringNullableWithAggregatesFilter<"Report"> | string | null
    hullMachineryUnderwriters?: StringNullableWithAggregatesFilter<"Report"> | string | null
    totalCrewOnBoard?: IntNullableWithAggregatesFilter<"Report"> | number | null
    conditionLoadedBallast?: StringNullableWithAggregatesFilter<"Report"> | string | null
    severityOfIncident?: StringNullableWithAggregatesFilter<"Report"> | string | null
    lastPortOfCall?: StringNullableWithAggregatesFilter<"Report"> | string | null
    freeboard?: StringNullableWithAggregatesFilter<"Report"> | string | null
    cargoTypeQty?: StringNullableWithAggregatesFilter<"Report"> | string | null
    bunkers?: StringNullableWithAggregatesFilter<"Report"> | string | null
    ownershipType?: StringNullableWithAggregatesFilter<"Report"> | string | null
    techManagerName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    techManagerAddress?: StringNullableWithAggregatesFilter<"Report"> | string | null
    techManagerPhone?: StringNullableWithAggregatesFilter<"Report"> | string | null
    techManagerEmail?: StringNullableWithAggregatesFilter<"Report"> | string | null
    rpsAgencyName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    rpsAgencyContactName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    rpsAgencyPhone?: StringNullableWithAggregatesFilter<"Report"> | string | null
    rpsAgencyEmail?: StringNullableWithAggregatesFilter<"Report"> | string | null
    localAgencyName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    localAgencyContactName?: StringNullableWithAggregatesFilter<"Report"> | string | null
    localAgencyPhone?: StringNullableWithAggregatesFilter<"Report"> | string | null
    localAgencyEmail?: StringNullableWithAggregatesFilter<"Report"> | string | null
    incidentCategory?: StringNullableWithAggregatesFilter<"Report"> | string | null
    incidentConsequences?: StringNullableWithAggregatesFilter<"Report"> | string | null
    deaths?: IntNullableWithAggregatesFilter<"Report"> | number | null
    injured?: IntNullableWithAggregatesFilter<"Report"> | number | null
    deceasedDetails?: StringNullableWithAggregatesFilter<"Report"> | string | null
    summaryIncident?: StringNullableWithAggregatesFilter<"Report"> | string | null
    summaryAction?: StringNullableWithAggregatesFilter<"Report"> | string | null
    lessonsLearnt?: StringNullableWithAggregatesFilter<"Report"> | string | null
    sarRequired?: StringNullableWithAggregatesFilter<"Report"> | string | null
    oilPollutionExtent?: StringNullableWithAggregatesFilter<"Report"> | string | null
    weatherConditions?: StringNullableWithAggregatesFilter<"Report"> | string | null
    tidalConditions?: StringNullableWithAggregatesFilter<"Report"> | string | null
    oilSpilledVolume?: StringNullableWithAggregatesFilter<"Report"> | string | null
  }

  export type ReportCreateInput = {
    id?: string
    shipName: string
    imoNumber: string
    incidentDate: Date | string
    reportedAt: Date | string
    dpaName: string
    dpaPhone: string
    dpaMobile: string
    dpaEmail: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaUrls?: ReportCreatemediaUrlsInput | string[]
    flag?: string | null
    shipType?: string | null
    registrationType?: string | null
    positionOfVessel?: string | null
    locationOfVessel?: string | null
    areaOfIncident?: string | null
    yearBuilt?: number | null
    deadweight?: string | null
    gt?: string | null
    maxDraft?: string | null
    classificationSociety?: string | null
    piClub?: string | null
    hullMachineryUnderwriters?: string | null
    totalCrewOnBoard?: number | null
    conditionLoadedBallast?: string | null
    severityOfIncident?: string | null
    lastPortOfCall?: string | null
    freeboard?: string | null
    cargoTypeQty?: string | null
    bunkers?: string | null
    ownershipType?: string | null
    techManagerName?: string | null
    techManagerAddress?: string | null
    techManagerPhone?: string | null
    techManagerEmail?: string | null
    rpsAgencyName?: string | null
    rpsAgencyContactName?: string | null
    rpsAgencyPhone?: string | null
    rpsAgencyEmail?: string | null
    localAgencyName?: string | null
    localAgencyContactName?: string | null
    localAgencyPhone?: string | null
    localAgencyEmail?: string | null
    incidentCategory?: string | null
    incidentConsequences?: string | null
    deaths?: number | null
    injured?: number | null
    deceasedDetails?: string | null
    summaryIncident?: string | null
    summaryAction?: string | null
    lessonsLearnt?: string | null
    sarRequired?: string | null
    oilPollutionExtent?: string | null
    weatherConditions?: string | null
    tidalConditions?: string | null
    oilSpilledVolume?: string | null
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    shipName: string
    imoNumber: string
    incidentDate: Date | string
    reportedAt: Date | string
    dpaName: string
    dpaPhone: string
    dpaMobile: string
    dpaEmail: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaUrls?: ReportCreatemediaUrlsInput | string[]
    flag?: string | null
    shipType?: string | null
    registrationType?: string | null
    positionOfVessel?: string | null
    locationOfVessel?: string | null
    areaOfIncident?: string | null
    yearBuilt?: number | null
    deadweight?: string | null
    gt?: string | null
    maxDraft?: string | null
    classificationSociety?: string | null
    piClub?: string | null
    hullMachineryUnderwriters?: string | null
    totalCrewOnBoard?: number | null
    conditionLoadedBallast?: string | null
    severityOfIncident?: string | null
    lastPortOfCall?: string | null
    freeboard?: string | null
    cargoTypeQty?: string | null
    bunkers?: string | null
    ownershipType?: string | null
    techManagerName?: string | null
    techManagerAddress?: string | null
    techManagerPhone?: string | null
    techManagerEmail?: string | null
    rpsAgencyName?: string | null
    rpsAgencyContactName?: string | null
    rpsAgencyPhone?: string | null
    rpsAgencyEmail?: string | null
    localAgencyName?: string | null
    localAgencyContactName?: string | null
    localAgencyPhone?: string | null
    localAgencyEmail?: string | null
    incidentCategory?: string | null
    incidentConsequences?: string | null
    deaths?: number | null
    injured?: number | null
    deceasedDetails?: string | null
    summaryIncident?: string | null
    summaryAction?: string | null
    lessonsLearnt?: string | null
    sarRequired?: string | null
    oilPollutionExtent?: string | null
    weatherConditions?: string | null
    tidalConditions?: string | null
    oilSpilledVolume?: string | null
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipName?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpaName?: StringFieldUpdateOperationsInput | string
    dpaPhone?: StringFieldUpdateOperationsInput | string
    dpaMobile?: StringFieldUpdateOperationsInput | string
    dpaEmail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUrls?: ReportUpdatemediaUrlsInput | string[]
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    shipType?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    positionOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    locationOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    areaOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    deadweight?: NullableStringFieldUpdateOperationsInput | string | null
    gt?: NullableStringFieldUpdateOperationsInput | string | null
    maxDraft?: NullableStringFieldUpdateOperationsInput | string | null
    classificationSociety?: NullableStringFieldUpdateOperationsInput | string | null
    piClub?: NullableStringFieldUpdateOperationsInput | string | null
    hullMachineryUnderwriters?: NullableStringFieldUpdateOperationsInput | string | null
    totalCrewOnBoard?: NullableIntFieldUpdateOperationsInput | number | null
    conditionLoadedBallast?: NullableStringFieldUpdateOperationsInput | string | null
    severityOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    lastPortOfCall?: NullableStringFieldUpdateOperationsInput | string | null
    freeboard?: NullableStringFieldUpdateOperationsInput | string | null
    cargoTypeQty?: NullableStringFieldUpdateOperationsInput | string | null
    bunkers?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    incidentCategory?: NullableStringFieldUpdateOperationsInput | string | null
    incidentConsequences?: NullableStringFieldUpdateOperationsInput | string | null
    deaths?: NullableIntFieldUpdateOperationsInput | number | null
    injured?: NullableIntFieldUpdateOperationsInput | number | null
    deceasedDetails?: NullableStringFieldUpdateOperationsInput | string | null
    summaryIncident?: NullableStringFieldUpdateOperationsInput | string | null
    summaryAction?: NullableStringFieldUpdateOperationsInput | string | null
    lessonsLearnt?: NullableStringFieldUpdateOperationsInput | string | null
    sarRequired?: NullableStringFieldUpdateOperationsInput | string | null
    oilPollutionExtent?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditions?: NullableStringFieldUpdateOperationsInput | string | null
    tidalConditions?: NullableStringFieldUpdateOperationsInput | string | null
    oilSpilledVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipName?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpaName?: StringFieldUpdateOperationsInput | string
    dpaPhone?: StringFieldUpdateOperationsInput | string
    dpaMobile?: StringFieldUpdateOperationsInput | string
    dpaEmail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUrls?: ReportUpdatemediaUrlsInput | string[]
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    shipType?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    positionOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    locationOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    areaOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    deadweight?: NullableStringFieldUpdateOperationsInput | string | null
    gt?: NullableStringFieldUpdateOperationsInput | string | null
    maxDraft?: NullableStringFieldUpdateOperationsInput | string | null
    classificationSociety?: NullableStringFieldUpdateOperationsInput | string | null
    piClub?: NullableStringFieldUpdateOperationsInput | string | null
    hullMachineryUnderwriters?: NullableStringFieldUpdateOperationsInput | string | null
    totalCrewOnBoard?: NullableIntFieldUpdateOperationsInput | number | null
    conditionLoadedBallast?: NullableStringFieldUpdateOperationsInput | string | null
    severityOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    lastPortOfCall?: NullableStringFieldUpdateOperationsInput | string | null
    freeboard?: NullableStringFieldUpdateOperationsInput | string | null
    cargoTypeQty?: NullableStringFieldUpdateOperationsInput | string | null
    bunkers?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    incidentCategory?: NullableStringFieldUpdateOperationsInput | string | null
    incidentConsequences?: NullableStringFieldUpdateOperationsInput | string | null
    deaths?: NullableIntFieldUpdateOperationsInput | number | null
    injured?: NullableIntFieldUpdateOperationsInput | number | null
    deceasedDetails?: NullableStringFieldUpdateOperationsInput | string | null
    summaryIncident?: NullableStringFieldUpdateOperationsInput | string | null
    summaryAction?: NullableStringFieldUpdateOperationsInput | string | null
    lessonsLearnt?: NullableStringFieldUpdateOperationsInput | string | null
    sarRequired?: NullableStringFieldUpdateOperationsInput | string | null
    oilPollutionExtent?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditions?: NullableStringFieldUpdateOperationsInput | string | null
    tidalConditions?: NullableStringFieldUpdateOperationsInput | string | null
    oilSpilledVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportCreateManyInput = {
    id?: string
    shipName: string
    imoNumber: string
    incidentDate: Date | string
    reportedAt: Date | string
    dpaName: string
    dpaPhone: string
    dpaMobile: string
    dpaEmail: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mediaUrls?: ReportCreatemediaUrlsInput | string[]
    flag?: string | null
    shipType?: string | null
    registrationType?: string | null
    positionOfVessel?: string | null
    locationOfVessel?: string | null
    areaOfIncident?: string | null
    yearBuilt?: number | null
    deadweight?: string | null
    gt?: string | null
    maxDraft?: string | null
    classificationSociety?: string | null
    piClub?: string | null
    hullMachineryUnderwriters?: string | null
    totalCrewOnBoard?: number | null
    conditionLoadedBallast?: string | null
    severityOfIncident?: string | null
    lastPortOfCall?: string | null
    freeboard?: string | null
    cargoTypeQty?: string | null
    bunkers?: string | null
    ownershipType?: string | null
    techManagerName?: string | null
    techManagerAddress?: string | null
    techManagerPhone?: string | null
    techManagerEmail?: string | null
    rpsAgencyName?: string | null
    rpsAgencyContactName?: string | null
    rpsAgencyPhone?: string | null
    rpsAgencyEmail?: string | null
    localAgencyName?: string | null
    localAgencyContactName?: string | null
    localAgencyPhone?: string | null
    localAgencyEmail?: string | null
    incidentCategory?: string | null
    incidentConsequences?: string | null
    deaths?: number | null
    injured?: number | null
    deceasedDetails?: string | null
    summaryIncident?: string | null
    summaryAction?: string | null
    lessonsLearnt?: string | null
    sarRequired?: string | null
    oilPollutionExtent?: string | null
    weatherConditions?: string | null
    tidalConditions?: string | null
    oilSpilledVolume?: string | null
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipName?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpaName?: StringFieldUpdateOperationsInput | string
    dpaPhone?: StringFieldUpdateOperationsInput | string
    dpaMobile?: StringFieldUpdateOperationsInput | string
    dpaEmail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUrls?: ReportUpdatemediaUrlsInput | string[]
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    shipType?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    positionOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    locationOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    areaOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    deadweight?: NullableStringFieldUpdateOperationsInput | string | null
    gt?: NullableStringFieldUpdateOperationsInput | string | null
    maxDraft?: NullableStringFieldUpdateOperationsInput | string | null
    classificationSociety?: NullableStringFieldUpdateOperationsInput | string | null
    piClub?: NullableStringFieldUpdateOperationsInput | string | null
    hullMachineryUnderwriters?: NullableStringFieldUpdateOperationsInput | string | null
    totalCrewOnBoard?: NullableIntFieldUpdateOperationsInput | number | null
    conditionLoadedBallast?: NullableStringFieldUpdateOperationsInput | string | null
    severityOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    lastPortOfCall?: NullableStringFieldUpdateOperationsInput | string | null
    freeboard?: NullableStringFieldUpdateOperationsInput | string | null
    cargoTypeQty?: NullableStringFieldUpdateOperationsInput | string | null
    bunkers?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    incidentCategory?: NullableStringFieldUpdateOperationsInput | string | null
    incidentConsequences?: NullableStringFieldUpdateOperationsInput | string | null
    deaths?: NullableIntFieldUpdateOperationsInput | number | null
    injured?: NullableIntFieldUpdateOperationsInput | number | null
    deceasedDetails?: NullableStringFieldUpdateOperationsInput | string | null
    summaryIncident?: NullableStringFieldUpdateOperationsInput | string | null
    summaryAction?: NullableStringFieldUpdateOperationsInput | string | null
    lessonsLearnt?: NullableStringFieldUpdateOperationsInput | string | null
    sarRequired?: NullableStringFieldUpdateOperationsInput | string | null
    oilPollutionExtent?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditions?: NullableStringFieldUpdateOperationsInput | string | null
    tidalConditions?: NullableStringFieldUpdateOperationsInput | string | null
    oilSpilledVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipName?: StringFieldUpdateOperationsInput | string
    imoNumber?: StringFieldUpdateOperationsInput | string
    incidentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dpaName?: StringFieldUpdateOperationsInput | string
    dpaPhone?: StringFieldUpdateOperationsInput | string
    dpaMobile?: StringFieldUpdateOperationsInput | string
    dpaEmail?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mediaUrls?: ReportUpdatemediaUrlsInput | string[]
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    shipType?: NullableStringFieldUpdateOperationsInput | string | null
    registrationType?: NullableStringFieldUpdateOperationsInput | string | null
    positionOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    locationOfVessel?: NullableStringFieldUpdateOperationsInput | string | null
    areaOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    yearBuilt?: NullableIntFieldUpdateOperationsInput | number | null
    deadweight?: NullableStringFieldUpdateOperationsInput | string | null
    gt?: NullableStringFieldUpdateOperationsInput | string | null
    maxDraft?: NullableStringFieldUpdateOperationsInput | string | null
    classificationSociety?: NullableStringFieldUpdateOperationsInput | string | null
    piClub?: NullableStringFieldUpdateOperationsInput | string | null
    hullMachineryUnderwriters?: NullableStringFieldUpdateOperationsInput | string | null
    totalCrewOnBoard?: NullableIntFieldUpdateOperationsInput | number | null
    conditionLoadedBallast?: NullableStringFieldUpdateOperationsInput | string | null
    severityOfIncident?: NullableStringFieldUpdateOperationsInput | string | null
    lastPortOfCall?: NullableStringFieldUpdateOperationsInput | string | null
    freeboard?: NullableStringFieldUpdateOperationsInput | string | null
    cargoTypeQty?: NullableStringFieldUpdateOperationsInput | string | null
    bunkers?: NullableStringFieldUpdateOperationsInput | string | null
    ownershipType?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerName?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerAddress?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    techManagerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    rpsAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyContactName?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    localAgencyEmail?: NullableStringFieldUpdateOperationsInput | string | null
    incidentCategory?: NullableStringFieldUpdateOperationsInput | string | null
    incidentConsequences?: NullableStringFieldUpdateOperationsInput | string | null
    deaths?: NullableIntFieldUpdateOperationsInput | number | null
    injured?: NullableIntFieldUpdateOperationsInput | number | null
    deceasedDetails?: NullableStringFieldUpdateOperationsInput | string | null
    summaryIncident?: NullableStringFieldUpdateOperationsInput | string | null
    summaryAction?: NullableStringFieldUpdateOperationsInput | string | null
    lessonsLearnt?: NullableStringFieldUpdateOperationsInput | string | null
    sarRequired?: NullableStringFieldUpdateOperationsInput | string | null
    oilPollutionExtent?: NullableStringFieldUpdateOperationsInput | string | null
    weatherConditions?: NullableStringFieldUpdateOperationsInput | string | null
    tidalConditions?: NullableStringFieldUpdateOperationsInput | string | null
    oilSpilledVolume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    shipName?: SortOrder
    imoNumber?: SortOrder
    incidentDate?: SortOrder
    reportedAt?: SortOrder
    dpaName?: SortOrder
    dpaPhone?: SortOrder
    dpaMobile?: SortOrder
    dpaEmail?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mediaUrls?: SortOrder
    flag?: SortOrder
    shipType?: SortOrder
    registrationType?: SortOrder
    positionOfVessel?: SortOrder
    locationOfVessel?: SortOrder
    areaOfIncident?: SortOrder
    yearBuilt?: SortOrder
    deadweight?: SortOrder
    gt?: SortOrder
    maxDraft?: SortOrder
    classificationSociety?: SortOrder
    piClub?: SortOrder
    hullMachineryUnderwriters?: SortOrder
    totalCrewOnBoard?: SortOrder
    conditionLoadedBallast?: SortOrder
    severityOfIncident?: SortOrder
    lastPortOfCall?: SortOrder
    freeboard?: SortOrder
    cargoTypeQty?: SortOrder
    bunkers?: SortOrder
    ownershipType?: SortOrder
    techManagerName?: SortOrder
    techManagerAddress?: SortOrder
    techManagerPhone?: SortOrder
    techManagerEmail?: SortOrder
    rpsAgencyName?: SortOrder
    rpsAgencyContactName?: SortOrder
    rpsAgencyPhone?: SortOrder
    rpsAgencyEmail?: SortOrder
    localAgencyName?: SortOrder
    localAgencyContactName?: SortOrder
    localAgencyPhone?: SortOrder
    localAgencyEmail?: SortOrder
    incidentCategory?: SortOrder
    incidentConsequences?: SortOrder
    deaths?: SortOrder
    injured?: SortOrder
    deceasedDetails?: SortOrder
    summaryIncident?: SortOrder
    summaryAction?: SortOrder
    lessonsLearnt?: SortOrder
    sarRequired?: SortOrder
    oilPollutionExtent?: SortOrder
    weatherConditions?: SortOrder
    tidalConditions?: SortOrder
    oilSpilledVolume?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    yearBuilt?: SortOrder
    totalCrewOnBoard?: SortOrder
    deaths?: SortOrder
    injured?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    shipName?: SortOrder
    imoNumber?: SortOrder
    incidentDate?: SortOrder
    reportedAt?: SortOrder
    dpaName?: SortOrder
    dpaPhone?: SortOrder
    dpaMobile?: SortOrder
    dpaEmail?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flag?: SortOrder
    shipType?: SortOrder
    registrationType?: SortOrder
    positionOfVessel?: SortOrder
    locationOfVessel?: SortOrder
    areaOfIncident?: SortOrder
    yearBuilt?: SortOrder
    deadweight?: SortOrder
    gt?: SortOrder
    maxDraft?: SortOrder
    classificationSociety?: SortOrder
    piClub?: SortOrder
    hullMachineryUnderwriters?: SortOrder
    totalCrewOnBoard?: SortOrder
    conditionLoadedBallast?: SortOrder
    severityOfIncident?: SortOrder
    lastPortOfCall?: SortOrder
    freeboard?: SortOrder
    cargoTypeQty?: SortOrder
    bunkers?: SortOrder
    ownershipType?: SortOrder
    techManagerName?: SortOrder
    techManagerAddress?: SortOrder
    techManagerPhone?: SortOrder
    techManagerEmail?: SortOrder
    rpsAgencyName?: SortOrder
    rpsAgencyContactName?: SortOrder
    rpsAgencyPhone?: SortOrder
    rpsAgencyEmail?: SortOrder
    localAgencyName?: SortOrder
    localAgencyContactName?: SortOrder
    localAgencyPhone?: SortOrder
    localAgencyEmail?: SortOrder
    incidentCategory?: SortOrder
    incidentConsequences?: SortOrder
    deaths?: SortOrder
    injured?: SortOrder
    deceasedDetails?: SortOrder
    summaryIncident?: SortOrder
    summaryAction?: SortOrder
    lessonsLearnt?: SortOrder
    sarRequired?: SortOrder
    oilPollutionExtent?: SortOrder
    weatherConditions?: SortOrder
    tidalConditions?: SortOrder
    oilSpilledVolume?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    shipName?: SortOrder
    imoNumber?: SortOrder
    incidentDate?: SortOrder
    reportedAt?: SortOrder
    dpaName?: SortOrder
    dpaPhone?: SortOrder
    dpaMobile?: SortOrder
    dpaEmail?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flag?: SortOrder
    shipType?: SortOrder
    registrationType?: SortOrder
    positionOfVessel?: SortOrder
    locationOfVessel?: SortOrder
    areaOfIncident?: SortOrder
    yearBuilt?: SortOrder
    deadweight?: SortOrder
    gt?: SortOrder
    maxDraft?: SortOrder
    classificationSociety?: SortOrder
    piClub?: SortOrder
    hullMachineryUnderwriters?: SortOrder
    totalCrewOnBoard?: SortOrder
    conditionLoadedBallast?: SortOrder
    severityOfIncident?: SortOrder
    lastPortOfCall?: SortOrder
    freeboard?: SortOrder
    cargoTypeQty?: SortOrder
    bunkers?: SortOrder
    ownershipType?: SortOrder
    techManagerName?: SortOrder
    techManagerAddress?: SortOrder
    techManagerPhone?: SortOrder
    techManagerEmail?: SortOrder
    rpsAgencyName?: SortOrder
    rpsAgencyContactName?: SortOrder
    rpsAgencyPhone?: SortOrder
    rpsAgencyEmail?: SortOrder
    localAgencyName?: SortOrder
    localAgencyContactName?: SortOrder
    localAgencyPhone?: SortOrder
    localAgencyEmail?: SortOrder
    incidentCategory?: SortOrder
    incidentConsequences?: SortOrder
    deaths?: SortOrder
    injured?: SortOrder
    deceasedDetails?: SortOrder
    summaryIncident?: SortOrder
    summaryAction?: SortOrder
    lessonsLearnt?: SortOrder
    sarRequired?: SortOrder
    oilPollutionExtent?: SortOrder
    weatherConditions?: SortOrder
    tidalConditions?: SortOrder
    oilSpilledVolume?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    yearBuilt?: SortOrder
    totalCrewOnBoard?: SortOrder
    deaths?: SortOrder
    injured?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ReportCreatemediaUrlsInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReportUpdatemediaUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}