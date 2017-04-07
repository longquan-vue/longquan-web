export const CREATE = "create";
export const NOW = new Date().getTime();

export const defData = {
    user: {
        headimgurl: require('../../static/wx/aw.jpg'), nickname: '蕾姆', birthday: NOW, sex: 1,
        marriage: 0, score: 0, msgNum: 0, welfNum: 0, actNum: 0, audit: 0
    },
    page: {page: 1, pageSize: 5, sort: [], order: [], filed: [], keyWord: [], start: null, end: null},
    activity: {
        name: '',
        picUrl: '',
        start: '',
        end: '',
        entryStart: '',
        entryEnd: '',
        entry: 0,
        score: '',
        sponsor: '',
        coSponsor: '',
        organizer: '',
        place: '',
        website: '',
        ticket: '',
        detail: '',
        rule: '',
        adminId: '',
        created: '',
        total: '',
        current: '',
        type: '',
        deleted: '',
        status: '',
        files: []
    }
}