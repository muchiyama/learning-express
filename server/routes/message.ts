import * as http from 'http';
import { Router, Response } from 'express';
import { Message } from '../models/message'

const messageRouter: Router = Router();

// 全件取得
messageRouter.get('/', (req, res, next) => {
    Message.find(function(err, doc) {
        if(err) {
            return res.status(500).json({
                title: 'エラーくん',
                error: err.message
            });
        }

        return res.status(200).json({ messages: doc });
    })
})

// 新規登録
messageRouter.post('/', (req, res, next) => {
    const message = new Message({
        message: req.body.message
    });

    message.save((err, result) => {
        if(err) {
            return res.status(500).json({
                title: 'エラーくん',
                error: err.message
            });
        }

        return res.status(200).json({
            message: 'とうろく',
            obj: result
        })
    })
})

export { messageRouter };