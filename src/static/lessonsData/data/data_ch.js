const data_ch = [
    {
        id: 1,
        title: '打字简介',
        type: "introduction",
        url: "/src/static/lessonsData/data/intro_ch.mp4",
        isLock: false,
        icon: "md-happy"
    },
    {
        id: 2,
        title: 'f和j',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['f', 'j']
    },
    {
        id: 3,
        title: '练习：f和j',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'f', 'f', 'f', 'j', 'j', 'j', 'f',
            ' ', 'f', 'j', ' ', 'j', 'f', ' ',
            'j', 'j', ' ', 'f', 'f', 'f', 'j',
            'f', 'j', 'f', 'f', 'j', 'j', 'j',
            'f', 'f', 'j', 'f', 'j', 'j', 'j',
            'f', 'j', 'j', 'j'
        ]
    },
    {
        id: 4,
        title: 'd和k',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['d', 'k']
    },
    {
        id: 5,
        title: '练习：d和k',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'd', 'd', 'd', 'k', 'k', 'k', 'd',
            ' ', 'd', 'k', ' ', 'k', 'd', ' ',
            'k', 'k', ' ', 'd', 'd', 'd', 'k',
            'd', 'k', 'd', 'd', 'k', 'k', 'k',
            'd', 'd', 'k', 'd', 'k', 'k', 'k',
            'd', 'k', 'k', 'k'
        ]
    },
    {
        id: 6,
        title: '复习：fjdk',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'd', 'f', 'j', 'f', 'f',
            'k', 'j', 'd', 'f', 'j',
            'k', 'f', 'f', 'k', 'f',
            'k', 'j', 'k', 'k', 'j'
        ]
    },
    {
        id: 7,
        title: '游戏：fjdk',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'k', 'f', 'j', 'd', 'j',
            'd', 'k', 'd', 'd', 'f',
            'f', 'j', 'd', 'j', 'k',
            'j', 'd', 'f', 'j', 'k'
        ]
    },
    {
        id: 8,
        title: 's和l',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['s', 'l']
    },
    {
        id: 9,
        title: '练习：s和l',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            's', 's', 's', 'l', 'l', 'l', 's',
            ' ', 's', 'l', ' ', 'l', 's', ' ',
            'l', 'l', ' ', 's', 's', 's', 'l',
            's', 'l', 's', 's', 'l', 'l', 'l',
            's', 's', 'l', 's', 'l', 'l', 'l',
            's', 'l', 'l', 'l'
        ]
    },
    {
        id: 10,
        title: '复习：fjdksl',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'd', 'k', 'l', 'd', 'k',
            'j', 'd', 'l', 's', 's',
            'f', 'k', 's', 'j', 'd',
            'f', 's', 'd', 'j', 'd'
        ]
    },
    {
        id: 11,
        title: 'a和;',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['a', ';']
    },
    {
        id: 12,
        title: '练习：a和;',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'a', 'a', 'a', ';', ';', ';', 'a',
            ' ', 'a', ';', ' ', ';', 'a', ' ',
            ';', ';', ' ', 'a', 'a', 'a', ';',
            'a', ';', 'a', 'a', ';', ';', ';',
            'a', 'a', ';', 'a', ';', ';', ';',
            'a', ';', ';', ';'
        ]
    },
    {
        id: 13,
        title: '复习：fjdksla;',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'a', 'f', 'f', 'l', 'j',
            'd', 'f', 'j', 's', 'j',
            'd', ';', 'l', 'l', 'd',
            'l', 'a', 'l', 'a', 'a'
        ]
    },
    {
        id: 14,
        title: '游戏：fjdksla;',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'a', 'f', 'k', 'a', 'l',
            'a', 'd', 'd', 'f', 'f',
            'j', 's', 'k', 'f', 'j',
            ';', 'd', 'j', 'k', ';'
        ]
    },
    {
        id: 15,
        title: 'g和h',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['g', 'h']
    },
    {
        id: 16,
        title: '练习：g和h',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'g', 'g', 'g', 'h', 'h', 'h', 'g',
            ' ', 'g', 'h', ' ', 'h', 'g', ' ',
            'h', 'h', ' ', 'g', 'g', 'g', 'h',
            'g', 'h', 'g', 'g', 'h', 'h', 'h',
            'g', 'g', 'h', 'g', 'h', 'h', 'h',
            'g', 'h', 'h', 'h'
        ]
    },
    {
        id: 17,
        title: '复习：fjdksla;gh',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'd', 'g', 'f', 'k', 'h',
            's', 'l', 'a', 'g', 'a',
            'a', ';', 'a', 'j', 'l',
            'd', 'h', 'a', 's', 's'
        ]
    },
    {
        id: 18,
        title: '游戏：fjdksla;gh',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            's', 'a', 'd', 's', 'l',
            'f', 'k', 'd', 'h', 'g',
            's', 'g', 's', ';', 'h',
            'j', 'f', 'l', 'h', ';'
        ]
    },
    {
        id: 19,
        title: 'r和u',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['r', 'u']
    },
    {
        id: 20,
        title: '练习：r和u',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'r', 'r', 'r', 'u', 'u', 'u', 'r',
            ' ', 'r', 'u', ' ', 'u', 'r', ' ',
            'u', 'u', ' ', 'r', 'r', 'r', 'u',
            'r', 'u', 'r', 'r', 'u', 'u', 'u',
            'r', 'r', 'u', 'r', 'u', 'u', 'u',
            'r', 'u', 'u', 'u'
        ]
    },
    {
        id: 21,
        title: 'e和i',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['e', 'i']
    },
    {
        id: 22,
        title: '练习：e和i',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'e', 'e', 'e', 'i', 'i', 'i', 'e',
            ' ', 'e', 'i', ' ', 'i', 'e', ' ',
            'i', 'i', ' ', 'e', 'e', 'e', 'i',
            'e', 'i', 'e', 'e', 'i', 'i', 'i',
            'e', 'e', 'i', 'e', 'i', 'i', 'i',
            'e', 'i', 'i', 'i'
        ]
    },
    {
        id: 23,
        title: '复习：ruei',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'i', 'u', 'i', 'i', 'i',
            'i', 'i', 'e', 'r', 'u',
            'i', 'e', 'e', 'r', 'e',
            'e', 'i', 'e', 'i', 'e'
        ]
    },
    {
        id: 24,
        title: '游戏：ruei',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'e', 'u', 'i', 'u', 'u',
            'i', 'e', 'r', 'e', 'u',
            'i', 'u', 'r', 'i', 'u',
            'r', 'e', 'e', 'r', 'r'
        ]
    },
    {
        id: 25,
        title: 'w和o',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['w', 'o']
    },
    {
        id: 26,
        title: '练习：w和o',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'w', 'w', 'w', 'o', 'o', 'o', 'w',
            ' ', 'w', 'o', ' ', 'o', 'w', ' ',
            'o', 'o', ' ', 'w', 'w', 'w', 'o',
            'w', 'o', 'w', 'w', 'o', 'o', 'o',
            'w', 'w', 'o', 'w', 'o', 'o', 'o',
            'w', 'o', 'o', 'o'
        ]
    },
    {
        id: 27,
        title: '复习：rueiwo',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'i', 'i', 'i', 'o', 'e',
            'w', 'i', 'r', 'u', 'e',
            'e', 'e', 'o', 'u', 'i',
            'r', 'e', 'e', 'e', 'r'
        ]
    },
    {
        id: 28,
        title: 'q和p',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['q', 'p']
    },
    {
        id: 29,
        title: '练习：q和p',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'q', 'q', 'q', 'p', 'p', 'p', 'q',
            ' ', 'q', 'p', ' ', 'p', 'q', ' ',
            'p', 'p', ' ', 'q', 'q', 'q', 'p',
            'q', 'p', 'q', 'q', 'p', 'p', 'p',
            'q', 'q', 'p', 'q', 'p', 'p', 'p',
            'q', 'p', 'p', 'p'
        ]
    },
    {
        id: 30,
        title: '复习：rueiwoqp',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'q', 'o', 'w', 'i', 'q',
            'o', 'w', 'w', 'p', 'r',
            'e', 'p', 'e', 'e', 'o',
            'u', 'u', 'e', 'i', 'e'
        ]
    },
    {
        id: 31,
        title: '游戏：rueiwoqp',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'q', 'o', 'p', 'p', 'e',
            'i', 'p', 'e', 'r', 'e',
            'o', 'o', 'o', 'i', 'r',
            'w', 'i', 'o', 'r', 'e'
        ]
    },
    {
        id: 32,
        title: 't和y',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['t', 'y']
    },
    {
        id: 33,
        title: '练习：t和y',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            't', 't', 't', 'y', 'y', 'y', 't',
            ' ', 't', 'y', ' ', 'y', 't', ' ',
            'y', 'y', ' ', 't', 't', 't', 'y',
            't', 'y', 't', 't', 'y', 'y', 'y',
            't', 't', 'y', 't', 'y', 'y', 'y',
            't', 'y', 'y', 'y'
        ]
    },
    {
        id: 34,
        title: '复习：rueiwoqpty',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'r', 'p', 'i', 'w', 'p',
            'u', 'p', 'r', 'w', 'q',
            't', 'y', 'y', 'e', 'q',
            'i', 't', 'w', 'i', 'w'
        ]
    },
    {
        id: 35,
        title: '游戏：rueiwoqpty',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'i', 'y', 'q', 'e', 'p',
            'q', 't', 'i', 'q', 'r',
            'w', 't', 'r', 'i', 'y',
            'y', 'p', 'p', 'y', 'e'
        ]
    },
    {
        id: 36,
        title: 'v和m',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['v', 'm']
    },
    {
        id: 37,
        title: '练习：v和m',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'v', 'v', 'v', 'm', 'm', 'm', 'v',
            ' ', 'v', 'm', ' ', 'm', 'v', ' ',
            'm', 'm', ' ', 'v', 'v', 'v', 'm',
            'v', 'm', 'v', 'v', 'm', 'm', 'm',
            'v', 'v', 'm', 'v', 'm', 'm', 'm',
            'v', 'm', 'm', 'm'
        ]
    },
    {
        id: 38,
        title: 'c和,',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['c', ',']
    },
    {
        id: 39,
        title: '练习：c和,',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'c', 'c', 'c', ',', ',', ',', 'c',
            ' ', 'c', ',', ' ', ',', 'c', ' ',
            ',', ',', ' ', 'c', 'c', 'c', ',',
            'c', ',', 'c', 'c', ',', ',', ',',
            'c', 'c', ',', 'c', ',', ',', ',',
            'c', ',', ',', ','
        ]
    },
    {
        id: 40,
        title: '复习：vmc,',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'c', 'c', 'c', 'v', 'm',
            'm', 'v', 'm', ',', 'c',
            ',', ',', 'c', 'v', 'c',
            'c', 'c', 'm', 'v', ','
        ]
    },
    {
        id: 41,
        title: '游戏：vmc,',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'v', ',', ',', 'v', ',',
            'c', ',', 'c', 'c', ',',
            'v', 'm', ',', 'm', 'm',
            'm', 'm', 'v', 'c', ','
        ]
    },
    {
        id: 42,
        title: 'x和.',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['x', '.']
    },
    {
        id: 43,
        title: '练习：x和.',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'x', 'x', 'x', '.', '.', '.', 'x',
            ' ', 'x', '.', ' ', '.', 'x', ' ',
            '.', '.', ' ', 'x', 'x', 'x', '.',
            'x', '.', 'x', 'x', '.', '.', '.',
            'x', 'x', '.', 'x', '.', '.', '.',
            'x', '.', '.', '.'
        ]
    },
    {
        id: 44,
        title: '复习：vmc,x.',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'x', 'x', 'c', '.', '.',
            'm', 'x', 'x', 'x', 'm',
            'm', 'x', 'c', 'm', '.',
            'm', 'x', '.', 'v', 'x'
        ]
    },
    {
        id: 45,
        title: 'z和/',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['z', '/']
    },
    {
        id: 46,
        title: '练习：z和/',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'z', 'z', 'z', '/', '/', '/', 'z',
            ' ', 'z', '/', ' ', '/', 'z', ' ',
            '/', '/', ' ', 'z', 'z', 'z', '/',
            'z', '/', 'z', 'z', '/', '/', '/',
            'z', 'z', '/', 'z', '/', '/', '/',
            'z', '/', '/', '/'
        ]
    },
    {
        id: 47,
        title: '复习：vmc,x.z/',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            '/', 'm', 'm', ',', 'z',
            ',', 'c', '.', 'v', ',',
            'm', ',', '.', '/', '/',
            'v', 'm', 'v', 'm', '.'
        ]
    },
    {
        id: 48,
        title: '游戏：vmc,x.z/',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            '.', '.', 'z', 'v', 'z',
            'm', '/', '/', 'z', 'c',
            'm', 'z', 'm', ',', 'm',
            'x', ',', 'm', 'c', ','
        ]
    },
    {
        id: 49,
        title: 'b和n',
        type: 'firstType',
        isLock: true,
        icon: 'ios-star',
        data: ['b', 'n']
    },
    {
        id: 50,
        title: '练习：b和n',
        type: 'exercise',
        isLock: true,
        icon: 'ios-up',
        data: [
            'b', 'b', 'b', 'n', 'n', 'n', 'b',
            ' ', 'b', 'n', ' ', 'n', 'b', ' ',
            'n', 'n', ' ', 'b', 'b', 'b', 'n',
            'b', 'n', 'b', 'b', 'n', 'n', 'n',
            'b', 'b', 'n', 'b', 'n', 'n', 'n',
            'b', 'n', 'n', 'n'
        ]
    },
    {
        id: 51,
        title: '复习：vmc,x.z/bn',
        type: 'review',
        isLock: true,
        icon: 'ios-up',
        data: [
            'c', 'v', '/', 'v', 'n',
            ',', 'v', 'z', 'z', 'm',
            'm', 'n', 'm', 'b', 'z',
            '.', 'z', 'm', 'n', '.'
        ]
    },
    {
        id: 52,
        title: '游戏：vmc,x.z/bn',
        type: 'game',
        isLock: true,
        icon: 'md-game-controller-b',
        data: [
            'n', 'b', 'v', '.', '.',
            '.', '.', 'z', 'v', 'v',
            'c', ',', '.', 'x', 'z',
            '/', 'z', 'c', 'm', 'z'
        ]
    }
];

export default data_ch;