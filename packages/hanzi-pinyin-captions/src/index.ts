import { HanziTools, pinyinify } from '@elyse0/hanzi-tools'

import { Caption, VideoCaptions } from '@xielyng/youtube-api'

const getHanziPinyinCaptions = (videoCaptions: VideoCaptions): VideoCaptions[] => {
    const hanziCaptions: Caption[] = []
    const pinyinCaptions: Caption[] = []
    for (const caption of videoCaptions.captions) {
        if (typeof caption.text !== 'string') {
            continue
        }

        const pinyinDetailed = pinyinify(caption.text, true) as HanziTools.PinyinDetailed;

        hanziCaptions.push({
            text: pinyinDetailed.segments,
            start: caption.start,
            end: caption.end,
        })

        pinyinCaptions.push({
            text: pinyinDetailed.pinyinSegments,
            start: caption.start,
            end: caption.end,
        })
    }

    return [
        {
            languageId: 'hanzi',
            captions: hanziCaptions,
        },
        {
            languageId: 'pinyin',
            captions: pinyinCaptions,
        },
    ]
}

export { getHanziPinyinCaptions }
