import fetch from 'node-fetch';

function getTodayQuestion() {
    let query = {
        "operationName": "questionOfToday",
        "variables": {},
        "query": "query questionOfToday { todayRecord {   question {     questionFrontendId     questionTitleSlug     __typename   }   lastSubmission {     id     __typename   }   date   userStatus   __typename }}"
    };
    return fetch('https://leetcode.cn/graphql', {
        method: 'POST',
        body: JSON.stringify(query),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(obj => {
            let titleId = obj?.data?.todayRecord ?.[0]?.question?.questionTitleSlug ?? "";
            if (titleId.length === 0) {
                return Promise.reject("get title id failed!!")
            } else {
                return Promise.resolve(titleId)
            }
        })
        .then(title => getQuestionByTitleId(title));
}

function getQuestionByTitleId(titleId) {
    const query =
        {
            "operationName": "questionData",
            "variables": {
                "titleSlug": titleId
            },
            "query":
                "query questionData($titleSlug: String!) {  question(titleSlug: $titleSlug) {    questionId    questionFrontendId    boundTopicId    title    titleSlug    content    translatedTitle    translatedContent    isPaidOnly    difficulty    likes    dislikes    isLiked    similarQuestions    contributors {      username      profileUrl      avatarUrl      __typename    }    langToValidPlayground    topicTags {      name      slug      translatedName      __typename    }    companyTagStats    codeSnippets {      lang      langSlug      code      __typename    }    stats    hints    solution {      id      canSeeDetail      __typename    }    status    sampleTestCase    metaData    judgerAvailable    judgeType    mysqlSchemas    enableRunCode    envInfo    book {      id      bookName      pressName      source      shortDescription      fullDescription      bookImgUrl      pressImgUrl      productUrl      __typename    }    isSubscribed    isDailyQuestion    dailyRecordStatus    editorType    ugcQuestionId    style    __typename  }}"
        };

    return fetch('https://leetcode.cn/graphql', {
        method: 'POST',
        body: JSON.stringify(query),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(obj => obj?.data?.question);
}


export {getTodayQuestion, getQuestionByTitleId};