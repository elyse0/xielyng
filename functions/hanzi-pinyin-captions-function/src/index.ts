import { Request, Response } from '@google-cloud/functions-framework'

import { getHanziPinyinCaptions } from '@xielyng/hanzi-pinyin-captions'

const main = (req: Request, res: Response) => {
    if (req.method !== 'POST') {
        return res.status(501).send({
            error: `Method ${req.method} is not supported`,
        });
    }

    if (!req.body || !Object.keys(req.body).length) {
        return res.status(501).send({
            error: 'Provide video captions inside body request',
        })
    }

    return res.status(200).send(getHanziPinyinCaptions(req.body))
}

export { main }
