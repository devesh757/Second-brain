import mongoose from 'mongoose';
export declare const UserModel: mongoose.Model<{
    username?: string | null | undefined;
    password?: string | null | undefined;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username?: string | null | undefined;
    password?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username?: string | null | undefined;
    password?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username?: string | null | undefined;
    password?: string | null | undefined;
}, mongoose.Document<unknown, {}, {
    username?: string | null | undefined;
    password?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username?: string | null | undefined;
    password?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username?: string | null | undefined;
        password?: string | null | undefined;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        username?: string | null | undefined;
        password?: string | null | undefined;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username?: string | null | undefined;
    password?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username?: string | null | undefined;
    password?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ContentModel: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
        type?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
        type?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null | undefined;
    link?: string | null | undefined;
    title?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const LinkModel: mongoose.Model<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
}, mongoose.Document<unknown, {}, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        hash?: string | null | undefined;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        userId: mongoose.Types.ObjectId;
        hash?: string | null | undefined;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: mongoose.Types.ObjectId;
    hash?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map