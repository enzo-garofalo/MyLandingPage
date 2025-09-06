import type { Request, RequestHandler, Response } from "express";



export namespace StudentFormManager {
    type studentForm = {
        name: string;        
        HowWereClasses : string;                      
        WhatDidYouLikeMost : string;                      
        OpnionOnMetodology : string;                      
        WouldRecommend : string;                      
        SubmissionDate : string;                      
    }

    export const StudentFormHandler: RequestHandler = 
    async (req: Request, res : Response) =>
    {
        const pname = req.get('name');
        const pHowWereClasses = req.get('HowWereClasses');
        const pWhatDidYouLikeMost = req.get('WhatDidYouLikeMost');
        const pOpnionOnMetodology = req.get('OpnionOnMetodology');
        const pWouldRecommend = req.get('WouldRecommend');
        const pSubmissionDate = req.get('SubmissionDate');
    }


}