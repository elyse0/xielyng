interface Caption {
    text: string | string[];
    start: number;
    end: number;
}

interface VideoCaptions {
    languageId: string;
    captions: Caption[]
}

interface MergedCaption extends Caption {
    languageId: string;
}

interface YoutubeCaptions extends VideoCaptions {
    videoId: string;
}

interface MergedVideoCaptions {
    start: number,
    end: number,
    captions: Record<string, string | string[]>
}

export {
    Caption, MergedCaption, YoutubeCaptions, MergedVideoCaptions, VideoCaptions,
};
