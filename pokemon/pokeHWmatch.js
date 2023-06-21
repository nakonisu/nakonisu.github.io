function SerchPokemon() {
    var inHeight = Number.parseInt(document.getElementById("inputHeight").value);
    var inWeight = Number.parseInt(document.getElementById("inputWeight").value);
    if (isNaN(inHeight)) { alert("高さは数値で入力してください"); return; }
    if (isNaN(inWeight)) { alert("重さは数値で入力してください"); return; }

    let answer = Serch(inHeight, inWeight);

    // 出力
    for (let i = 0; i < 3; i++) {
        document.getElementById("pokeName" + i).innerHTML = pokedata[answer[i] - 1].name;
        document.getElementById("pokeHeight" + i).innerHTML = Number.parseInt(pokedata[answer[i] - 1].height * 100 + "(cm)");
        document.getElementById("pokeWeight" + i).innerHTML = pokedata[answer[i] - 1].weight + "(kg)";
    }
}


/**
 * 高さと体重から近いポケモンのリストを返す
 * @param {高さ} h 
 * @param {体重} w 
 * @returns 体重身長が近いポケモンのリスト
 */
function Serch(h, w) {
    let len = pokedata.length;
    answer = [0, 0, 0];
    min = [10000000, 10000000, 10000000];
    for (let i = 1; i < len; i++) {
        height = pokedata[i].height * 100;
        weight = pokedata[i].weight;
        id = pokedata[i].id;
        if (Math.abs(h - height) < min[0]) {
            min[0] = Math.abs(h - height);
            answer[0] = id;
        }
        if (Math.abs(w - weight) < min[1]) {
            min[1] = Math.abs(w - weight);
            answer[1] = id;
        }
        if (Math.abs(h - height) + Math.abs(w - weight) < min[2]) {
            min[2] = Math.abs(h - height);
            answer[2] = id;
        }
    }
    return answer;
}


const pokedata = [
    {
        "id": 1,
        "name": "フシギダネ",
        "height": 0.7,
        "weight": 6.9
    },
    {
        "id": 2,
        "name": "フシギソウ",
        "height": 1,
        "weight": 13
    },
    {
        "id": 3,
        "name": "フシギバナ",
        "height": 2,
        "weight": 100
    },
    {
        "id": 4,
        "name": "メガフシギバナ",
        "height": 2.4,
        "weight": 155.5
    },
    {
        "id": 5,
        "name": "ヒトカゲ",
        "height": 0.6,
        "weight": 8.5
    },
    {
        "id": 6,
        "name": "リザード",
        "height": 1.1,
        "weight": 19
    },
    {
        "id": 7,
        "name": "リザードン",
        "height": 1.7,
        "weight": 90.5
    },
    {
        "id": 8,
        "name": "メガリザードンX",
        "height": 1.7,
        "weight": 110.5
    },
    {
        "id": 9,
        "name": "メガリザードンY",
        "height": 1.7,
        "weight": 100.5
    },
    {
        "id": 10,
        "name": "ゼニガメ",
        "height": 0.5,
        "weight": 9
    },
    {
        "id": 11,
        "name": "カメール",
        "height": 1,
        "weight": 22.5
    },
    {
        "id": 12,
        "name": "カメックス",
        "height": 1.6,
        "weight": 85.5
    },
    {
        "id": 13,
        "name": "メガカメックス",
        "height": 1.6,
        "weight": 101.1
    },
    {
        "id": 14,
        "name": "キャタピー",
        "height": 0.3,
        "weight": 2.9
    },
    {
        "id": 15,
        "name": "トランセル",
        "height": 0.7,
        "weight": 9.9
    },
    {
        "id": 16,
        "name": "バタフリー",
        "height": 1.1,
        "weight": 32
    },
    {
        "id": 17,
        "name": "ビードル",
        "height": 0.3,
        "weight": 3.2
    },
    {
        "id": 18,
        "name": "コクーン",
        "height": 0.6,
        "weight": 10
    },
    {
        "id": 19,
        "name": "スピアー",
        "height": 1,
        "weight": 29.5
    },
    {
        "id": 20,
        "name": "メガスピアー",
        "height": 1.4,
        "weight": 40.5
    },
    {
        "id": 21,
        "name": "ポッポ",
        "height": 0.3,
        "weight": 1.8
    },
    {
        "id": 22,
        "name": "ピジョン",
        "height": 1.1,
        "weight": 30
    },
    {
        "id": 23,
        "name": "ピジョット",
        "height": 1.5,
        "weight": 39.5
    },
    {
        "id": 24,
        "name": "メガピジョット",
        "height": 2.2,
        "weight": 50.5
    },
    {
        "id": 25,
        "name": "コラッタ",
        "height": 0.3,
        "weight": 3.5
    },
    {
        "id": 26,
        "name": "コラッタ(アローラのすがた)",
        "height": 0.3,
        "weight": 3.8
    },
    {
        "id": 27,
        "name": "ラッタ",
        "height": 0.7,
        "weight": 18.5
    },
    {
        "id": 28,
        "name": "ラッタ(アローラのすがた)",
        "height": 0.7,
        "weight": 25.5
    },
    {
        "id": 29,
        "name": "ラッタ(アローラのすがた)(ぬしサイズ)",
        "height": 1.4,
        "weight": 105
    },
    {
        "id": 30,
        "name": "オニスズメ",
        "height": 0.3,
        "weight": 2
    },
    {
        "id": 31,
        "name": "オニドリル",
        "height": 1.2,
        "weight": 38
    },
    {
        "id": 32,
        "name": "アーボ",
        "height": 2,
        "weight": 6.9
    },
    {
        "id": 33,
        "name": "アーボック",
        "height": 3.5,
        "weight": 65
    },
    {
        "id": 34,
        "name": "ピカチュウ",
        "height": 0.4,
        "weight": 6
    },
    {
        "id": 35,
        "name": "ライチュウ",
        "height": 0.8,
        "weight": 30
    },
    {
        "id": 36,
        "name": "ライチュウ(アローラのすがた)",
        "height": 0.7,
        "weight": 21
    },
    {
        "id": 37,
        "name": "サンド",
        "height": 0.6,
        "weight": 12
    },
    {
        "id": 38,
        "name": "サンド(アローラのすがた)",
        "height": 0.7,
        "weight": 40
    },
    {
        "id": 39,
        "name": "サンドパン",
        "height": 1,
        "weight": 29.5
    },
    {
        "id": 40,
        "name": "サンドパン(アローラのすがた)",
        "height": 1.2,
        "weight": 55
    },
    {
        "id": 41,
        "name": "ニドラン♀",
        "height": 0.4,
        "weight": 7
    },
    {
        "id": 42,
        "name": "ニドリーナ",
        "height": 0.8,
        "weight": 20
    },
    {
        "id": 43,
        "name": "ニドクイン",
        "height": 1.3,
        "weight": 60
    },
    {
        "id": 44,
        "name": "ニドラン♂",
        "height": 0.5,
        "weight": 9
    },
    {
        "id": 45,
        "name": "ニドリーノ",
        "height": 0.9,
        "weight": 19.5
    },
    {
        "id": 46,
        "name": "ニドキング",
        "height": 1.4,
        "weight": 62
    },
    {
        "id": 47,
        "name": "ピッピ",
        "height": 0.6,
        "weight": 7.5
    },
    {
        "id": 48,
        "name": "ピクシー",
        "height": 1.3,
        "weight": 40
    },
    {
        "id": 49,
        "name": "ロコン",
        "height": 0.6,
        "weight": 9.9
    },
    {
        "id": 50,
        "name": "ロコン(アローラのすがた)",
        "height": 0.6,
        "weight": 9.9
    },
    {
        "id": 51,
        "name": "キュウコン",
        "height": 1.1,
        "weight": 19.9
    },
    {
        "id": 52,
        "name": "キュウコン(アローラのすがた)",
        "height": 1.1,
        "weight": 19.9
    },
    {
        "id": 53,
        "name": "プリン",
        "height": 0.5,
        "weight": 5.5
    },
    {
        "id": 54,
        "name": "プクリン",
        "height": 1,
        "weight": 12
    },
    {
        "id": 55,
        "name": "ズバット",
        "height": 0.8,
        "weight": 7.5
    },
    {
        "id": 56,
        "name": "ゴルバット",
        "height": 1.6,
        "weight": 55
    },
    {
        "id": 57,
        "name": "ナゾノクサ",
        "height": 0.5,
        "weight": 5.4
    },
    {
        "id": 58,
        "name": "クサイハナ",
        "height": 0.8,
        "weight": 8.6
    },
    {
        "id": 59,
        "name": "ラフレシア",
        "height": 1.2,
        "weight": 18.6
    },
    {
        "id": 60,
        "name": "パラス",
        "height": 0.3,
        "weight": 5.4
    },
    {
        "id": 61,
        "name": "パラセクト",
        "height": 1,
        "weight": 29.5
    },
    {
        "id": 62,
        "name": "コンパン",
        "height": 1,
        "weight": 30
    },
    {
        "id": 63,
        "name": "モルフォン",
        "height": 1.5,
        "weight": 12.5
    },
    {
        "id": 64,
        "name": "ディグダ",
        "height": 0.2,
        "weight": 0.8
    },
    {
        "id": 65,
        "name": "ディグダ(アローラのすがた)",
        "height": 0.2,
        "weight": 1
    },
    {
        "id": 66,
        "name": "ダグトリオ",
        "height": 0.7,
        "weight": 33.3
    },
    {
        "id": 67,
        "name": "ダグトリオ(アローラのすがた)",
        "height": 0.7,
        "weight": 66.6
    },
    {
        "id": 68,
        "name": "ニャース",
        "height": 0.4,
        "weight": 4.2
    },
    {
        "id": 69,
        "name": "ニャース(アローラのすがた)",
        "height": 0.4,
        "weight": 4.2
    },
    {
        "id": 70,
        "name": "ニャース(ガラルのすがた)",
        "height": 0.4,
        "weight": 7.5
    },
    {
        "id": 71,
        "name": "ペルシアン",
        "height": 1,
        "weight": 32
    },
    {
        "id": 72,
        "name": "ペルシアン(アローラのすがた)",
        "height": 1.1,
        "weight": 33
    },
    {
        "id": 73,
        "name": "コダック",
        "height": 0.8,
        "weight": 19.6
    },
    {
        "id": 74,
        "name": "ゴルダック",
        "height": 1.7,
        "weight": 76.6
    },
    {
        "id": 75,
        "name": "マンキー",
        "height": 0.5,
        "weight": 28
    },
    {
        "id": 76,
        "name": "オコリザル",
        "height": 1,
        "weight": 32
    },
    {
        "id": 77,
        "name": "ガーディ",
        "height": 0.7,
        "weight": 19
    },
    {
        "id": 78,
        "name": "ガーディ(ヒスイのすがた)",
        "height": 0.8,
        "weight": 22.7
    },
    {
        "id": 79,
        "name": "ウインディ",
        "height": 1.9,
        "weight": 155
    },
    {
        "id": 80,
        "name": "ウインディ(ヒスイのすがた)",
        "height": 2,
        "weight": 168
    },
    {
        "id": 81,
        "name": "ニョロモ",
        "height": 0.6,
        "weight": 12.4
    },
    {
        "id": 82,
        "name": "ニョロゾ",
        "height": 1,
        "weight": 20
    },
    {
        "id": 83,
        "name": "ニョロボン",
        "height": 1.3,
        "weight": 54
    },
    {
        "id": 84,
        "name": "ケーシィ",
        "height": 0.9,
        "weight": 19.5
    },
    {
        "id": 85,
        "name": "ユンゲラー",
        "height": 1.3,
        "weight": 56.5
    },
    {
        "id": 86,
        "name": "フーディン",
        "height": 1.5,
        "weight": 48
    },
    {
        "id": 87,
        "name": "メガフーディン",
        "height": 1.2,
        "weight": 48
    },
    {
        "id": 88,
        "name": "ワンリキー",
        "height": 0.8,
        "weight": 19.5
    },
    {
        "id": 89,
        "name": "ゴーリキー",
        "height": 1.5,
        "weight": 70.5
    },
    {
        "id": 90,
        "name": "カイリキー",
        "height": 1.6,
        "weight": 130
    },
    {
        "id": 91,
        "name": "マダツボミ",
        "height": 0.7,
        "weight": 4
    },
    {
        "id": 92,
        "name": "ウツドン",
        "height": 1,
        "weight": 6.4
    },
    {
        "id": 93,
        "name": "ウツボット",
        "height": 1.7,
        "weight": 15.5
    },
    {
        "id": 94,
        "name": "メノクラゲ",
        "height": 0.9,
        "weight": 45.5
    },
    {
        "id": 95,
        "name": "ドククラゲ",
        "height": 1.6,
        "weight": 55
    },
    {
        "id": 96,
        "name": "イシツブテ",
        "height": 0.4,
        "weight": 20
    },
    {
        "id": 97,
        "name": "イシツブテ(アローラのすがた)",
        "height": 0.4,
        "weight": 20.3
    },
    {
        "id": 98,
        "name": "ゴローン",
        "height": 1,
        "weight": 105
    },
    {
        "id": 99,
        "name": "ゴローン(アローラのすがた)",
        "height": 1,
        "weight": 110
    },
    {
        "id": 100,
        "name": "ゴローニャ",
        "height": 1.4,
        "weight": 300
    },
    {
        "id": 101,
        "name": "ゴローニャ(アローラのすがた)",
        "height": 1.7,
        "weight": 316
    },
    {
        "id": 102,
        "name": "ポニータ",
        "height": 1,
        "weight": 30
    },
    {
        "id": 103,
        "name": "ポニータ(ガラルのすがた)",
        "height": 0.8,
        "weight": 24
    },
    {
        "id": 104,
        "name": "ギャロップ",
        "height": 1.7,
        "weight": 95
    },
    {
        "id": 105,
        "name": "ギャロップ(ガラルのすがた)",
        "height": 1.7,
        "weight": 80
    },
    {
        "id": 106,
        "name": "ヤドン",
        "height": 1.2,
        "weight": 36
    },
    {
        "id": 107,
        "name": "ヤドン(ガラルのすがた)",
        "height": 1.2,
        "weight": 36
    },
    {
        "id": 108,
        "name": "ヤドラン",
        "height": 1.6,
        "weight": 78.5
    },
    {
        "id": 109,
        "name": "メガヤドラン",
        "height": 2,
        "weight": 120
    },
    {
        "id": 110,
        "name": "ヤドラン(ガラルのすがた)",
        "height": 1.6,
        "weight": 70.5
    },
    {
        "id": 111,
        "name": "コイル",
        "height": 0.3,
        "weight": 6
    },
    {
        "id": 112,
        "name": "レアコイル",
        "height": 1,
        "weight": 60
    },
    {
        "id": 113,
        "name": "カモネギ",
        "height": 0.8,
        "weight": 15
    },
    {
        "id": 114,
        "name": "カモネギ(ガラルのすがた)",
        "height": 0.8,
        "weight": 42
    },
    {
        "id": 115,
        "name": "ドードー",
        "height": 1.4,
        "weight": 39.2
    },
    {
        "id": 116,
        "name": "ドードリオ",
        "height": 1.8,
        "weight": 85.2
    },
    {
        "id": 117,
        "name": "パウワウ",
        "height": 1.1,
        "weight": 90
    },
    {
        "id": 118,
        "name": "ジュゴン",
        "height": 1.7,
        "weight": 120
    },
    {
        "id": 119,
        "name": "ベトベター",
        "height": 0.9,
        "weight": 30
    },
    {
        "id": 120,
        "name": "ベトベター(アローラのすがた)",
        "height": 0.7,
        "weight": 42
    },
    {
        "id": 121,
        "name": "ベトベトン",
        "height": 1.2,
        "weight": 30
    },
    {
        "id": 122,
        "name": "ベトベトン(アローラのすがた)",
        "height": 1,
        "weight": 52
    },
    {
        "id": 123,
        "name": "シェルダー",
        "height": 0.3,
        "weight": 4
    },
    {
        "id": 124,
        "name": "パルシェン",
        "height": 1.5,
        "weight": 132.5
    },
    {
        "id": 125,
        "name": "ゴース",
        "height": 1.3,
        "weight": 0.1
    },
    {
        "id": 126,
        "name": "ゴースト",
        "height": 1.6,
        "weight": 0.1
    },
    {
        "id": 127,
        "name": "ゲンガー",
        "height": 1.5,
        "weight": 40.5
    },
    {
        "id": 128,
        "name": "メガゲンガー",
        "height": 1.4,
        "weight": 40.5
    },
    {
        "id": 129,
        "name": "イワーク",
        "height": 8.8,
        "weight": 210
    },
    {
        "id": 130,
        "name": "スリープ",
        "height": 1,
        "weight": 32.4
    },
    {
        "id": 131,
        "name": "スリーパー",
        "height": 1.6,
        "weight": 75.6
    },
    {
        "id": 132,
        "name": "クラブ",
        "height": 0.4,
        "weight": 6.5
    },
    {
        "id": 133,
        "name": "キングラー",
        "height": 1.3,
        "weight": 60
    },
    {
        "id": 134,
        "name": "ビリリダマ",
        "height": 0.5,
        "weight": 10.4
    },
    {
        "id": 135,
        "name": "ビリリダマ(ヒスイのすがた)",
        "height": 0.5,
        "weight": 13
    },
    {
        "id": 136,
        "name": "マルマイン",
        "height": 1.2,
        "weight": 66.6
    },
    {
        "id": 137,
        "name": "マルマイン(ヒスイのすがた)",
        "height": 1.2,
        "weight": 71
    },
    {
        "id": 138,
        "name": "タマタマ",
        "height": 0.4,
        "weight": 2.5
    },
    {
        "id": 139,
        "name": "ナッシー",
        "height": 2,
        "weight": 120
    },
    {
        "id": 140,
        "name": "ナッシー(アローラのすがた)",
        "height": 10.9,
        "weight": 415.6
    },
    {
        "id": 141,
        "name": "カラカラ",
        "height": 0.4,
        "weight": 6.5
    },
    {
        "id": 142,
        "name": "ガラガラ",
        "height": 1,
        "weight": 45
    },
    {
        "id": 143,
        "name": "ガラガラ(アローラのすがた)",
        "height": 1,
        "weight": 34
    },
    {
        "id": 144,
        "name": "ガラガラ(アローラのすがた)(ぬしサイズ)",
        "height": 1.7,
        "weight": 98
    },
    {
        "id": 145,
        "name": "サワムラー",
        "height": 1.5,
        "weight": 49.8
    },
    {
        "id": 146,
        "name": "エビワラー",
        "height": 1.4,
        "weight": 50.2
    },
    {
        "id": 147,
        "name": "ベロリンガ",
        "height": 1.2,
        "weight": 65.5
    },
    {
        "id": 148,
        "name": "ドガース",
        "height": 0.6,
        "weight": 1
    },
    {
        "id": 149,
        "name": "マタドガス",
        "height": 1.2,
        "weight": 9.5
    },
    {
        "id": 150,
        "name": "マタドガス(ガラルのすがた)",
        "height": 3,
        "weight": 16
    },
    {
        "id": 151,
        "name": "サイホーン",
        "height": 1,
        "weight": 115
    },
    {
        "id": 152,
        "name": "サイドン",
        "height": 1.9,
        "weight": 120
    },
    {
        "id": 153,
        "name": "ラッキー",
        "height": 1.1,
        "weight": 34.6
    },
    {
        "id": 154,
        "name": "モンジャラ",
        "height": 1,
        "weight": 35
    },
    {
        "id": 155,
        "name": "ガルーラ",
        "height": 2.2,
        "weight": 80
    },
    {
        "id": 156,
        "name": "メガガルーラ",
        "height": 2.2,
        "weight": 100
    },
    {
        "id": 157,
        "name": "タッツー",
        "height": 0.4,
        "weight": 8
    },
    {
        "id": 158,
        "name": "シードラ",
        "height": 1.2,
        "weight": 25
    },
    {
        "id": 159,
        "name": "トサキント",
        "height": 0.6,
        "weight": 15
    },
    {
        "id": 160,
        "name": "アズマオウ",
        "height": 1.3,
        "weight": 39
    },
    {
        "id": 161,
        "name": "ヒトデマン",
        "height": 0.8,
        "weight": 34.5
    },
    {
        "id": 162,
        "name": "スターミー",
        "height": 1.1,
        "weight": 80
    },
    {
        "id": 163,
        "name": "バリヤード",
        "height": 1.3,
        "weight": 54.5
    },
    {
        "id": 164,
        "name": "バリヤード(ガラルのすがた)",
        "height": 1.4,
        "weight": 56.8
    },
    {
        "id": 165,
        "name": "ストライク",
        "height": 1.5,
        "weight": 56
    },
    {
        "id": 166,
        "name": "ルージュラ",
        "height": 1.4,
        "weight": 40.6
    },
    {
        "id": 167,
        "name": "エレブー",
        "height": 1.1,
        "weight": 30
    },
    {
        "id": 168,
        "name": "ブーバー",
        "height": 1.3,
        "weight": 44.5
    },
    {
        "id": 169,
        "name": "カイロス",
        "height": 1.5,
        "weight": 55
    },
    {
        "id": 170,
        "name": "メガカイロス",
        "height": 1.7,
        "weight": 59
    },
    {
        "id": 171,
        "name": "ケンタロス",
        "height": 1.4,
        "weight": 88.4
    },
    {
        "id": 172,
        "name": "ケンタロス(パルデアのすがた・コンバット種)",
        "height": 1.4,
        "weight": 115
    },
    {
        "id": 173,
        "name": "ケンタロス(パルデアのすがた・ブレイズ種)",
        "height": 1.4,
        "weight": 85
    },
    {
        "id": 174,
        "name": "ケンタロス(パルデアのすがた・ウォーター種)",
        "height": 1.4,
        "weight": 110
    },
    {
        "id": 175,
        "name": "コイキング",
        "height": 0.9,
        "weight": 10
    },
    {
        "id": 176,
        "name": "ギャラドス",
        "height": 6.5,
        "weight": 235
    },
    {
        "id": 177,
        "name": "メガギャラドス",
        "height": 6.5,
        "weight": 305
    },
    {
        "id": 178,
        "name": "ラプラス",
        "height": 2.5,
        "weight": 220
    },
    {
        "id": 179,
        "name": "メタモン",
        "height": 0.3,
        "weight": 4
    },
    {
        "id": 180,
        "name": "イーブイ",
        "height": 0.3,
        "weight": 6.5
    },
    {
        "id": 181,
        "name": "シャワーズ",
        "height": 1,
        "weight": 29
    },
    {
        "id": 182,
        "name": "サンダース",
        "height": 0.8,
        "weight": 24.5
    },
    {
        "id": 183,
        "name": "ブースター",
        "height": 0.9,
        "weight": 25
    },
    {
        "id": 184,
        "name": "ポリゴン",
        "height": 0.8,
        "weight": 36.5
    },
    {
        "id": 185,
        "name": "オムナイト",
        "height": 0.4,
        "weight": 7.5
    },
    {
        "id": 186,
        "name": "オムスター",
        "height": 1,
        "weight": 35
    },
    {
        "id": 187,
        "name": "カブト",
        "height": 0.5,
        "weight": 11.5
    },
    {
        "id": 188,
        "name": "カブトプス",
        "height": 1.3,
        "weight": 40.5
    },
    {
        "id": 189,
        "name": "プテラ",
        "height": 1.8,
        "weight": 59
    },
    {
        "id": 190,
        "name": "メガプテラ",
        "height": 2.1,
        "weight": 79
    },
    {
        "id": 191,
        "name": "カビゴン",
        "height": 2.1,
        "weight": 460
    },
    {
        "id": 192,
        "name": "フリーザー",
        "height": 1.7,
        "weight": 55.4
    },
    {
        "id": 193,
        "name": "フリーザー(ガラルのすがた)",
        "height": 1.7,
        "weight": 50.9
    },
    {
        "id": 194,
        "name": "サンダー",
        "height": 1.6,
        "weight": 52.6
    },
    {
        "id": 195,
        "name": "サンダー(ガラルのすがた)",
        "height": 1.6,
        "weight": 58.2
    },
    {
        "id": 196,
        "name": "ファイヤー",
        "height": 2,
        "weight": 60
    },
    {
        "id": 197,
        "name": "ファイヤー(ガラルのすがた)",
        "height": 2,
        "weight": 66
    },
    {
        "id": 198,
        "name": "ミニリュウ",
        "height": 1.8,
        "weight": 3.3
    },
    {
        "id": 199,
        "name": "ハクリュー",
        "height": 4,
        "weight": 16.5
    },
    {
        "id": 200,
        "name": "カイリュー",
        "height": 2.2,
        "weight": 210
    },
    {
        "id": 201,
        "name": "ミュウツー",
        "height": 2,
        "weight": 122
    },
    {
        "id": 202,
        "name": "メガミュウツーX",
        "height": 2.3,
        "weight": 127
    },
    {
        "id": 203,
        "name": "メガミュウツーY",
        "height": 1.5,
        "weight": 33
    },
    {
        "id": 204,
        "name": "ミュウ",
        "height": 0.4,
        "weight": 4
    },
    {
        "id": 205,
        "name": "チコリータ",
        "height": 0.9,
        "weight": 6.4
    },
    {
        "id": 206,
        "name": "ベイリーフ",
        "height": 1.2,
        "weight": 15.8
    },
    {
        "id": 207,
        "name": "メガニウム",
        "height": 1.8,
        "weight": 100.5
    },
    {
        "id": 208,
        "name": "ヒノアラシ",
        "height": 0.5,
        "weight": 7.9
    },
    {
        "id": 209,
        "name": "マグマラシ",
        "height": 0.9,
        "weight": 19
    },
    {
        "id": 210,
        "name": "バクフーン",
        "height": 1.7,
        "weight": 79.5
    },
    {
        "id": 211,
        "name": "バクフーン(ヒスイのすがた)",
        "height": 1.6,
        "weight": 69.8
    },
    {
        "id": 212,
        "name": "ワニノコ",
        "height": 0.6,
        "weight": 9.5
    },
    {
        "id": 213,
        "name": "アリゲイツ",
        "height": 1.1,
        "weight": 25
    },
    {
        "id": 214,
        "name": "オーダイル",
        "height": 2.3,
        "weight": 88.8
    },
    {
        "id": 215,
        "name": "オタチ",
        "height": 0.8,
        "weight": 6
    },
    {
        "id": 216,
        "name": "オオタチ",
        "height": 1.8,
        "weight": 32.5
    },
    {
        "id": 217,
        "name": "ホーホー",
        "height": 0.7,
        "weight": 21.2
    },
    {
        "id": 218,
        "name": "ヨルノズク",
        "height": 1.6,
        "weight": 40.8
    },
    {
        "id": 219,
        "name": "レディバ",
        "height": 1,
        "weight": 10.8
    },
    {
        "id": 220,
        "name": "レディアン",
        "height": 1.4,
        "weight": 35.6
    },
    {
        "id": 221,
        "name": "イトマル",
        "height": 0.5,
        "weight": 8.5
    },
    {
        "id": 222,
        "name": "アリアドス",
        "height": 1.1,
        "weight": 33.5
    },
    {
        "id": 223,
        "name": "クロバット",
        "height": 1.8,
        "weight": 75
    },
    {
        "id": 224,
        "name": "チョンチー",
        "height": 0.5,
        "weight": 12
    },
    {
        "id": 225,
        "name": "ランターン",
        "height": 1.2,
        "weight": 22.5
    },
    {
        "id": 226,
        "name": "ピチュー",
        "height": 0.3,
        "weight": 2
    },
    {
        "id": 227,
        "name": "ピィ",
        "height": 0.3,
        "weight": 3
    },
    {
        "id": 228,
        "name": "ププリン",
        "height": 0.3,
        "weight": 1
    },
    {
        "id": 229,
        "name": "トゲピー",
        "height": 0.3,
        "weight": 1.5
    },
    {
        "id": 230,
        "name": "トゲチック",
        "height": 0.6,
        "weight": 3.2
    },
    {
        "id": 231,
        "name": "ネイティ",
        "height": 0.2,
        "weight": 2
    },
    {
        "id": 232,
        "name": "ネイティオ",
        "height": 1.5,
        "weight": 15
    },
    {
        "id": 233,
        "name": "メリープ",
        "height": 0.6,
        "weight": 7.8
    },
    {
        "id": 234,
        "name": "モココ",
        "height": 0.8,
        "weight": 13.3
    },
    {
        "id": 235,
        "name": "デンリュウ",
        "height": 1.4,
        "weight": 61.5
    },
    {
        "id": 236,
        "name": "メガデンリュウ",
        "height": 1.4,
        "weight": 61.5
    },
    {
        "id": 237,
        "name": "キレイハナ",
        "height": 0.4,
        "weight": 5.8
    },
    {
        "id": 238,
        "name": "マリル",
        "height": 0.4,
        "weight": 8.5
    },
    {
        "id": 239,
        "name": "マリルリ",
        "height": 0.8,
        "weight": 28.5
    },
    {
        "id": 240,
        "name": "ウソッキー",
        "height": 1.2,
        "weight": 38
    },
    {
        "id": 241,
        "name": "ニョロトノ",
        "height": 1.1,
        "weight": 33.9
    },
    {
        "id": 242,
        "name": "ハネッコ",
        "height": 0.4,
        "weight": 0.5
    },
    {
        "id": 243,
        "name": "ポポッコ",
        "height": 0.6,
        "weight": 1
    },
    {
        "id": 244,
        "name": "ワタッコ",
        "height": 0.8,
        "weight": 3
    },
    {
        "id": 245,
        "name": "エイパム",
        "height": 0.8,
        "weight": 11.5
    },
    {
        "id": 246,
        "name": "ヒマナッツ",
        "height": 0.3,
        "weight": 1.8
    },
    {
        "id": 247,
        "name": "キマワリ",
        "height": 0.8,
        "weight": 8.5
    },
    {
        "id": 248,
        "name": "ヤンヤンマ",
        "height": 1.2,
        "weight": 38
    },
    {
        "id": 249,
        "name": "ウパー",
        "height": 0.4,
        "weight": 8.5
    },
    {
        "id": 250,
        "name": "ウパー(パルデアのすがた)",
        "height": 0.4,
        "weight": 11
    },
    {
        "id": 251,
        "name": "ヌオー",
        "height": 1.4,
        "weight": 75
    },
    {
        "id": 252,
        "name": "エーフィ",
        "height": 0.9,
        "weight": 26.5
    },
    {
        "id": 253,
        "name": "ブラッキー",
        "height": 1,
        "weight": 27
    },
    {
        "id": 254,
        "name": "ヤミカラス",
        "height": 0.5,
        "weight": 2.1
    },
    {
        "id": 255,
        "name": "ヤドキング",
        "height": 2,
        "weight": 79.5
    },
    {
        "id": 256,
        "name": "ヤドキング(ガラルのすがた)",
        "height": 1.8,
        "weight": 79.5
    },
    {
        "id": 257,
        "name": "ムウマ",
        "height": 0.7,
        "weight": 1
    },
    {
        "id": 258,
        "name": "アンノーン",
        "height": 0.5,
        "weight": 5
    },
    {
        "id": 259,
        "name": "ソーナンス",
        "height": 1.3,
        "weight": 28.5
    },
    {
        "id": 260,
        "name": "キリンリキ",
        "height": 1.5,
        "weight": 41.5
    },
    {
        "id": 261,
        "name": "クヌギダマ",
        "height": 0.6,
        "weight": 7.2
    },
    {
        "id": 262,
        "name": "フォレトス",
        "height": 1.2,
        "weight": 125.8
    },
    {
        "id": 263,
        "name": "ノコッチ",
        "height": 1.5,
        "weight": 14
    },
    {
        "id": 264,
        "name": "グライガー",
        "height": 1.1,
        "weight": 64.8
    },
    {
        "id": 265,
        "name": "ハガネール",
        "height": 9.2,
        "weight": 400
    },
    {
        "id": 266,
        "name": "メガハガネール",
        "height": 10.5,
        "weight": 740
    },
    {
        "id": 267,
        "name": "ブルー",
        "height": 0.6,
        "weight": 7.8
    },
    {
        "id": 268,
        "name": "グランブル",
        "height": 1.4,
        "weight": 48.7
    },
    {
        "id": 269,
        "name": "ハリーセン",
        "height": 0.5,
        "weight": 3.9
    },
    {
        "id": 270,
        "name": "ハリーセン(ヒスイのすがた)",
        "height": 0.5,
        "weight": 3.9
    },
    {
        "id": 271,
        "name": "ハッサム",
        "height": 1.8,
        "weight": 118
    },
    {
        "id": 272,
        "name": "メガハッサム",
        "height": 2,
        "weight": 125
    },
    {
        "id": 273,
        "name": "ツボツボ",
        "height": 0.6,
        "weight": 20.5
    },
    {
        "id": 274,
        "name": "ヘラクロス",
        "height": 1.5,
        "weight": 54
    },
    {
        "id": 275,
        "name": "メガヘラクロス",
        "height": 1.7,
        "weight": 62.5
    },
    {
        "id": 276,
        "name": "ニューラ",
        "height": 0.9,
        "weight": 28
    },
    {
        "id": 277,
        "name": "ニューラ(ヒスイのすがた)",
        "height": 0.9,
        "weight": 27
    },
    {
        "id": 278,
        "name": "ヒメグマ",
        "height": 0.6,
        "weight": 8.8
    },
    {
        "id": 279,
        "name": "リングマ",
        "height": 1.8,
        "weight": 125.8
    },
    {
        "id": 280,
        "name": "マグマッグ",
        "height": 0.7,
        "weight": 35
    },
    {
        "id": 281,
        "name": "マグカルゴ",
        "height": 0.8,
        "weight": 55
    },
    {
        "id": 282,
        "name": "ウリムー",
        "height": 0.4,
        "weight": 6.5
    },
    {
        "id": 283,
        "name": "イノムー",
        "height": 1.1,
        "weight": 55.8
    },
    {
        "id": 284,
        "name": "サニーゴ",
        "height": 0.6,
        "weight": 5
    },
    {
        "id": 285,
        "name": "サニーゴ(ガラルのすがた)",
        "height": 0.6,
        "weight": 0.5
    },
    {
        "id": 286,
        "name": "テッポウオ",
        "height": 0.6,
        "weight": 12
    },
    {
        "id": 287,
        "name": "オクタン",
        "height": 0.9,
        "weight": 28.5
    },
    {
        "id": 288,
        "name": "デリバード",
        "height": 0.9,
        "weight": 16
    },
    {
        "id": 289,
        "name": "マンタイン",
        "height": 2.1,
        "weight": 220
    },
    {
        "id": 290,
        "name": "エアームド",
        "height": 1.7,
        "weight": 50.5
    },
    {
        "id": 291,
        "name": "デルビル",
        "height": 0.6,
        "weight": 10.8
    },
    {
        "id": 292,
        "name": "ヘルガー",
        "height": 1.4,
        "weight": 35
    },
    {
        "id": 293,
        "name": "メガヘルガー",
        "height": 1.9,
        "weight": 49.5
    },
    {
        "id": 294,
        "name": "キングドラ",
        "height": 1.8,
        "weight": 152
    },
    {
        "id": 295,
        "name": "ゴマゾウ",
        "height": 0.5,
        "weight": 33.5
    },
    {
        "id": 296,
        "name": "ドンファン",
        "height": 1.1,
        "weight": 120
    },
    {
        "id": 297,
        "name": "ポリゴン2",
        "height": 0.6,
        "weight": 32.5
    },
    {
        "id": 298,
        "name": "オドシシ",
        "height": 1.4,
        "weight": 71.2
    },
    {
        "id": 299,
        "name": "ドーブル",
        "height": 1.2,
        "weight": 58
    },
    {
        "id": 300,
        "name": "バルキー",
        "height": 0.7,
        "weight": 21
    },
    {
        "id": 301,
        "name": "カポエラー",
        "height": 1.4,
        "weight": 48
    },
    {
        "id": 302,
        "name": "ムチュール",
        "height": 0.4,
        "weight": 6
    },
    {
        "id": 303,
        "name": "エレキッド",
        "height": 0.6,
        "weight": 23.5
    },
    {
        "id": 304,
        "name": "ブビィ",
        "height": 0.7,
        "weight": 21.4
    },
    {
        "id": 305,
        "name": "ミルタンク",
        "height": 1.2,
        "weight": 75.5
    },
    {
        "id": 306,
        "name": "ハピナス",
        "height": 1.5,
        "weight": 46.8
    },
    {
        "id": 307,
        "name": "ライコウ",
        "height": 1.9,
        "weight": 178
    },
    {
        "id": 308,
        "name": "エンテイ",
        "height": 2.1,
        "weight": 198
    },
    {
        "id": 309,
        "name": "スイクン",
        "height": 2,
        "weight": 187
    },
    {
        "id": 310,
        "name": "ヨーギラス",
        "height": 0.6,
        "weight": 72
    },
    {
        "id": 311,
        "name": "サナギラス",
        "height": 1.2,
        "weight": 152
    },
    {
        "id": 312,
        "name": "バンギラス",
        "height": 2,
        "weight": 202
    },
    {
        "id": 313,
        "name": "メガバンギラス",
        "height": 2.5,
        "weight": 255
    },
    {
        "id": 314,
        "name": "ルギア",
        "height": 5.2,
        "weight": 216
    },
    {
        "id": 315,
        "name": "ホウオウ",
        "height": 3.8,
        "weight": 199
    },
    {
        "id": 316,
        "name": "セレビィ",
        "height": 0.6,
        "weight": 5
    },
    {
        "id": 317,
        "name": "キモリ",
        "height": 0.5,
        "weight": 5
    },
    {
        "id": 318,
        "name": "ジュプトル",
        "height": 0.9,
        "weight": 21.6
    },
    {
        "id": 319,
        "name": "ジュカイン",
        "height": 1.7,
        "weight": 52.2
    },
    {
        "id": 320,
        "name": "メガジュカイン",
        "height": 1.9,
        "weight": 55.2
    },
    {
        "id": 321,
        "name": "アチャモ",
        "height": 0.4,
        "weight": 2.5
    },
    {
        "id": 322,
        "name": "ワカシャモ",
        "height": 0.9,
        "weight": 19.5
    },
    {
        "id": 323,
        "name": "バシャーモ",
        "height": 1.9,
        "weight": 52
    },
    {
        "id": 324,
        "name": "メガバシャーモ",
        "height": 1.9,
        "weight": 52
    },
    {
        "id": 325,
        "name": "ミズゴロウ",
        "height": 0.4,
        "weight": 7.6
    },
    {
        "id": 326,
        "name": "ヌマクロー",
        "height": 0.7,
        "weight": 28
    },
    {
        "id": 327,
        "name": "ラグラージ",
        "height": 1.5,
        "weight": 81.9
    },
    {
        "id": 328,
        "name": "メガラグラージ",
        "height": 1.9,
        "weight": 102
    },
    {
        "id": 329,
        "name": "ポチエナ",
        "height": 0.5,
        "weight": 13.6
    },
    {
        "id": 330,
        "name": "グラエナ",
        "height": 1,
        "weight": 37
    },
    {
        "id": 331,
        "name": "ジグザグマ",
        "height": 0.4,
        "weight": 17.5
    },
    {
        "id": 332,
        "name": "ジグザグマ(ガラルのすがた)",
        "height": 0.4,
        "weight": 17.5
    },
    {
        "id": 333,
        "name": "マッスグマ",
        "height": 0.5,
        "weight": 32.5
    },
    {
        "id": 334,
        "name": "マッスグマ(ガラルのすがた)",
        "height": 0.5,
        "weight": 32.5
    },
    {
        "id": 335,
        "name": "ケムッソ",
        "height": 0.3,
        "weight": 3.6
    },
    {
        "id": 336,
        "name": "カラサリス",
        "height": 0.6,
        "weight": 10
    },
    {
        "id": 337,
        "name": "アゲハント",
        "height": 1,
        "weight": 28.4
    },
    {
        "id": 338,
        "name": "マユルド",
        "height": 0.7,
        "weight": 11.5
    },
    {
        "id": 339,
        "name": "ドクケイル",
        "height": 1.2,
        "weight": 31.6
    },
    {
        "id": 340,
        "name": "ハスボー",
        "height": 0.5,
        "weight": 2.6
    },
    {
        "id": 341,
        "name": "ハスブレロ",
        "height": 1.2,
        "weight": 32.5
    },
    {
        "id": 342,
        "name": "ルンパッパ",
        "height": 1.5,
        "weight": 55
    },
    {
        "id": 343,
        "name": "タネボー",
        "height": 0.5,
        "weight": 4
    },
    {
        "id": 344,
        "name": "コノハナ",
        "height": 1,
        "weight": 28
    },
    {
        "id": 345,
        "name": "ダーテング",
        "height": 1.3,
        "weight": 59.6
    },
    {
        "id": 346,
        "name": "スバメ",
        "height": 0.3,
        "weight": 2.3
    },
    {
        "id": 347,
        "name": "オオスバメ",
        "height": 0.7,
        "weight": 19.8
    },
    {
        "id": 348,
        "name": "キャモメ",
        "height": 0.6,
        "weight": 9.5
    },
    {
        "id": 349,
        "name": "ペリッパー",
        "height": 1.2,
        "weight": 28
    },
    {
        "id": 350,
        "name": "ラルトス",
        "height": 0.4,
        "weight": 6.6
    },
    {
        "id": 351,
        "name": "キルリア",
        "height": 0.8,
        "weight": 20.2
    },
    {
        "id": 352,
        "name": "サーナイト",
        "height": 1.6,
        "weight": 48.4
    },
    {
        "id": 353,
        "name": "メガサーナイト",
        "height": 1.6,
        "weight": 48.4
    },
    {
        "id": 354,
        "name": "アメタマ",
        "height": 0.5,
        "weight": 1.7
    },
    {
        "id": 355,
        "name": "アメモース",
        "height": 0.8,
        "weight": 3.6
    },
    {
        "id": 356,
        "name": "キノココ",
        "height": 0.4,
        "weight": 4.5
    },
    {
        "id": 357,
        "name": "キノガッサ",
        "height": 1.2,
        "weight": 39.2
    },
    {
        "id": 358,
        "name": "ナマケロ",
        "height": 0.8,
        "weight": 24
    },
    {
        "id": 359,
        "name": "ヤルキモノ",
        "height": 1.4,
        "weight": 46.5
    },
    {
        "id": 360,
        "name": "ケッキング",
        "height": 2,
        "weight": 130.5
    },
    {
        "id": 361,
        "name": "ツチニン",
        "height": 0.5,
        "weight": 5.5
    },
    {
        "id": 362,
        "name": "テッカニン",
        "height": 0.8,
        "weight": 12
    },
    {
        "id": 363,
        "name": "ヌケニン",
        "height": 0.8,
        "weight": 1.2
    },
    {
        "id": 364,
        "name": "ゴニョニョ",
        "height": 0.6,
        "weight": 16.3
    },
    {
        "id": 365,
        "name": "ドゴーム",
        "height": 1,
        "weight": 40.5
    },
    {
        "id": 366,
        "name": "バクオング",
        "height": 1.5,
        "weight": 84
    },
    {
        "id": 367,
        "name": "マクノシタ",
        "height": 1,
        "weight": 86.4
    },
    {
        "id": 368,
        "name": "ハリテヤマ",
        "height": 2.3,
        "weight": 253.8
    },
    {
        "id": 369,
        "name": "ルリリ",
        "height": 0.2,
        "weight": 2
    },
    {
        "id": 370,
        "name": "ノズパス",
        "height": 1,
        "weight": 97
    },
    {
        "id": 371,
        "name": "エネコ",
        "height": 0.6,
        "weight": 11
    },
    {
        "id": 372,
        "name": "エネコロロ",
        "height": 1.1,
        "weight": 32.6
    },
    {
        "id": 373,
        "name": "ヤミラミ",
        "height": 0.5,
        "weight": 11
    },
    {
        "id": 374,
        "name": "メガヤミラミ",
        "height": 0.5,
        "weight": 161
    },
    {
        "id": 375,
        "name": "クチート",
        "height": 0.6,
        "weight": 11.5
    },
    {
        "id": 376,
        "name": "メガクチート",
        "height": 1,
        "weight": 23.5
    },
    {
        "id": 377,
        "name": "ココドラ",
        "height": 0.4,
        "weight": 60
    },
    {
        "id": 378,
        "name": "コドラ",
        "height": 0.9,
        "weight": 120
    },
    {
        "id": 379,
        "name": "ボスゴドラ",
        "height": 2.1,
        "weight": 360
    },
    {
        "id": 380,
        "name": "メガボスゴドラ",
        "height": 2.2,
        "weight": 395
    },
    {
        "id": 381,
        "name": "アサナン",
        "height": 0.6,
        "weight": 11.2
    },
    {
        "id": 382,
        "name": "チャーレム",
        "height": 1.3,
        "weight": 31.5
    },
    {
        "id": 383,
        "name": "メガチャーレム",
        "height": 1.3,
        "weight": 31.5
    },
    {
        "id": 384,
        "name": "ラクライ",
        "height": 0.6,
        "weight": 15.2
    },
    {
        "id": 385,
        "name": "ライボルト",
        "height": 1.5,
        "weight": 40.2
    },
    {
        "id": 386,
        "name": "メガライボルト",
        "height": 1.8,
        "weight": 44
    },
    {
        "id": 387,
        "name": "プラスル",
        "height": 0.4,
        "weight": 4.2
    },
    {
        "id": 388,
        "name": "マイナン",
        "height": 0.4,
        "weight": 4.2
    },
    {
        "id": 389,
        "name": "バルビート",
        "height": 0.7,
        "weight": 17.7
    },
    {
        "id": 390,
        "name": "イルミーゼ",
        "height": 0.6,
        "weight": 17.7
    },
    {
        "id": 391,
        "name": "ロゼリア",
        "height": 0.3,
        "weight": 2
    },
    {
        "id": 392,
        "name": "ゴクリン",
        "height": 0.4,
        "weight": 10.3
    },
    {
        "id": 393,
        "name": "マルノーム",
        "height": 1.7,
        "weight": 80
    },
    {
        "id": 394,
        "name": "キバニア",
        "height": 0.8,
        "weight": 20.8
    },
    {
        "id": 395,
        "name": "サメハダー",
        "height": 1.8,
        "weight": 88.8
    },
    {
        "id": 396,
        "name": "メガサメハダー",
        "height": 2.5,
        "weight": 130.3
    },
    {
        "id": 397,
        "name": "ホエルコ",
        "height": 2,
        "weight": 130
    },
    {
        "id": 398,
        "name": "ホエルオー",
        "height": 14.5,
        "weight": 398
    },
    {
        "id": 399,
        "name": "ドンメル",
        "height": 0.7,
        "weight": 24
    },
    {
        "id": 400,
        "name": "バクーダ",
        "height": 1.9,
        "weight": 220
    },
    {
        "id": 401,
        "name": "メガバクーダ",
        "height": 2.5,
        "weight": 320.5
    },
    {
        "id": 402,
        "name": "コータス",
        "height": 0.5,
        "weight": 80.4
    },
    {
        "id": 403,
        "name": "バネブー",
        "height": 0.7,
        "weight": 30.6
    },
    {
        "id": 404,
        "name": "ブーピッグ",
        "height": 0.9,
        "weight": 71.5
    },
    {
        "id": 405,
        "name": "パッチール",
        "height": 1.1,
        "weight": 5
    },
    {
        "id": 406,
        "name": "ナックラー",
        "height": 0.7,
        "weight": 15
    },
    {
        "id": 407,
        "name": "ビブラーバ",
        "height": 1.1,
        "weight": 15.3
    },
    {
        "id": 408,
        "name": "フライゴン",
        "height": 2,
        "weight": 82
    },
    {
        "id": 409,
        "name": "サボネア",
        "height": 0.4,
        "weight": 51.3
    },
    {
        "id": 410,
        "name": "ノクタス",
        "height": 1.3,
        "weight": 77.4
    },
    {
        "id": 411,
        "name": "チルット",
        "height": 0.4,
        "weight": 1.2
    },
    {
        "id": 412,
        "name": "チルタリス",
        "height": 1.1,
        "weight": 20.6
    },
    {
        "id": 413,
        "name": "メガチルタリス",
        "height": 1.5,
        "weight": 20.6
    },
    {
        "id": 414,
        "name": "ザングース",
        "height": 1.3,
        "weight": 40.3
    },
    {
        "id": 415,
        "name": "ハブネーク",
        "height": 2.7,
        "weight": 52.5
    },
    {
        "id": 416,
        "name": "ルナトーン",
        "height": 1,
        "weight": 168
    },
    {
        "id": 417,
        "name": "ソルロック",
        "height": 1.2,
        "weight": 154
    },
    {
        "id": 418,
        "name": "ドジョッチ",
        "height": 0.4,
        "weight": 1.9
    },
    {
        "id": 419,
        "name": "ナマズン",
        "height": 0.9,
        "weight": 23.6
    },
    {
        "id": 420,
        "name": "ヘイガニ",
        "height": 0.6,
        "weight": 11.5
    },
    {
        "id": 421,
        "name": "シザリガー",
        "height": 1.1,
        "weight": 32.8
    },
    {
        "id": 422,
        "name": "ヤジロン",
        "height": 0.5,
        "weight": 21.5
    },
    {
        "id": 423,
        "name": "ネンドール",
        "height": 1.5,
        "weight": 108
    },
    {
        "id": 424,
        "name": "リリーラ",
        "height": 1,
        "weight": 23.8
    },
    {
        "id": 425,
        "name": "ユレイドル",
        "height": 1.5,
        "weight": 60.4
    },
    {
        "id": 426,
        "name": "アノプス",
        "height": 0.7,
        "weight": 12.5
    },
    {
        "id": 427,
        "name": "アーマルド",
        "height": 1.5,
        "weight": 68.2
    },
    {
        "id": 428,
        "name": "ヒンバス",
        "height": 0.6,
        "weight": 7.4
    },
    {
        "id": 429,
        "name": "ミロカロス",
        "height": 6.2,
        "weight": 162
    },
    {
        "id": 430,
        "name": "ポワルン",
        "height": 0.3,
        "weight": 0.8
    },
    {
        "id": 431,
        "name": "カクレオン",
        "height": 1,
        "weight": 22
    },
    {
        "id": 432,
        "name": "カゲボウズ",
        "height": 0.6,
        "weight": 2.3
    },
    {
        "id": 433,
        "name": "ジュペッタ",
        "height": 1.1,
        "weight": 12.5
    },
    {
        "id": 434,
        "name": "メガジュペッタ",
        "height": 1.2,
        "weight": 13
    },
    {
        "id": 435,
        "name": "ヨマワル",
        "height": 0.8,
        "weight": 15
    },
    {
        "id": 436,
        "name": "サマヨール",
        "height": 1.6,
        "weight": 30.6
    },
    {
        "id": 437,
        "name": "トロピウス",
        "height": 2,
        "weight": 100
    },
    {
        "id": 438,
        "name": "チリーン",
        "height": 0.6,
        "weight": 1
    },
    {
        "id": 439,
        "name": "アブソル",
        "height": 1.2,
        "weight": 47
    },
    {
        "id": 440,
        "name": "メガアブソル",
        "height": 1.2,
        "weight": 49
    },
    {
        "id": 441,
        "name": "ソーナノ",
        "height": 0.6,
        "weight": 14
    },
    {
        "id": 442,
        "name": "ユキワラシ",
        "height": 0.7,
        "weight": 16.8
    },
    {
        "id": 443,
        "name": "オニゴーリ",
        "height": 1.5,
        "weight": 256.5
    },
    {
        "id": 444,
        "name": "メガオニゴーリ",
        "height": 2.1,
        "weight": 350.2
    },
    {
        "id": 445,
        "name": "タマザラシ",
        "height": 0.8,
        "weight": 39.5
    },
    {
        "id": 446,
        "name": "トドグラー",
        "height": 1.1,
        "weight": 87.6
    },
    {
        "id": 447,
        "name": "トドゼルガ",
        "height": 1.4,
        "weight": 150.6
    },
    {
        "id": 448,
        "name": "パールル",
        "height": 0.4,
        "weight": 52.5
    },
    {
        "id": 449,
        "name": "ハンテール",
        "height": 1.7,
        "weight": 27
    },
    {
        "id": 450,
        "name": "サクラビス",
        "height": 1.8,
        "weight": 22.6
    },
    {
        "id": 451,
        "name": "ジーランス",
        "height": 1,
        "weight": 23.4
    },
    {
        "id": 452,
        "name": "ラブカス",
        "height": 0.6,
        "weight": 8.7
    },
    {
        "id": 453,
        "name": "タツベイ",
        "height": 0.6,
        "weight": 42.1
    },
    {
        "id": 454,
        "name": "コモルー",
        "height": 1.1,
        "weight": 110.5
    },
    {
        "id": 455,
        "name": "ボーマンダ",
        "height": 1.5,
        "weight": 102.6
    },
    {
        "id": 456,
        "name": "メガボーマンダ",
        "height": 1.8,
        "weight": 112.6
    },
    {
        "id": 457,
        "name": "ダンバル",
        "height": 0.6,
        "weight": 95.2
    },
    {
        "id": 458,
        "name": "メタング",
        "height": 1.2,
        "weight": 202.5
    },
    {
        "id": 459,
        "name": "メタグロス",
        "height": 1.6,
        "weight": 550
    },
    {
        "id": 460,
        "name": "メガメタグロス",
        "height": 2.5,
        "weight": 942.9
    },
    {
        "id": 461,
        "name": "レジロック",
        "height": 1.7,
        "weight": 230
    },
    {
        "id": 462,
        "name": "レジアイス",
        "height": 1.8,
        "weight": 175
    },
    {
        "id": 463,
        "name": "レジスチル",
        "height": 1.9,
        "weight": 205
    },
    {
        "id": 464,
        "name": "ラティアス",
        "height": 1.4,
        "weight": 40
    },
    {
        "id": 465,
        "name": "メガラティアス",
        "height": 1.8,
        "weight": 52
    },
    {
        "id": 466,
        "name": "ラティオス",
        "height": 2,
        "weight": 60
    },
    {
        "id": 467,
        "name": "メガラティオス",
        "height": 2.3,
        "weight": 70
    },
    {
        "id": 468,
        "name": "カイオーガ",
        "height": 4.5,
        "weight": 352
    },
    {
        "id": 469,
        "name": "カイオーガ(ゲンシカイオーガ)",
        "height": 9.8,
        "weight": 430
    },
    {
        "id": 470,
        "name": "グラードン",
        "height": 3.5,
        "weight": 950
    },
    {
        "id": 471,
        "name": "グラードン(ゲンシグラードン)",
        "height": 5,
        "weight": 999.7
    },
    {
        "id": 472,
        "name": "レックウザ",
        "height": 7,
        "weight": 206.5
    },
    {
        "id": 473,
        "name": "メガレックウザ",
        "height": 10.8,
        "weight": 392
    },
    {
        "id": 474,
        "name": "ジラーチ",
        "height": 0.3,
        "weight": 1.1
    },
    {
        "id": 475,
        "name": "デオキシス",
        "height": 1.7,
        "weight": 60.8
    },
    {
        "id": 476,
        "name": "ナエトル",
        "height": 0.4,
        "weight": 10.2
    },
    {
        "id": 477,
        "name": "ハヤシガメ",
        "height": 1.1,
        "weight": 97
    },
    {
        "id": 478,
        "name": "ドダイトス",
        "height": 2.2,
        "weight": 310
    },
    {
        "id": 479,
        "name": "ヒコザル",
        "height": 0.5,
        "weight": 6.2
    },
    {
        "id": 480,
        "name": "モウカザル",
        "height": 0.9,
        "weight": 22
    },
    {
        "id": 481,
        "name": "ゴウカザル",
        "height": 1.2,
        "weight": 55
    },
    {
        "id": 482,
        "name": "ポッチャマ",
        "height": 0.4,
        "weight": 5.2
    },
    {
        "id": 483,
        "name": "ポッタイシ",
        "height": 0.8,
        "weight": 23
    },
    {
        "id": 484,
        "name": "エンペルト",
        "height": 1.7,
        "weight": 84.5
    },
    {
        "id": 485,
        "name": "ムックル",
        "height": 0.3,
        "weight": 2
    },
    {
        "id": 486,
        "name": "ムクバード",
        "height": 0.6,
        "weight": 15.5
    },
    {
        "id": 487,
        "name": "ムクホーク",
        "height": 1.2,
        "weight": 24.9
    },
    {
        "id": 488,
        "name": "ビッパ",
        "height": 0.5,
        "weight": 20
    },
    {
        "id": 489,
        "name": "ビーダル",
        "height": 1,
        "weight": 31.5
    },
    {
        "id": 490,
        "name": "コロボーシ",
        "height": 0.3,
        "weight": 2.2
    },
    {
        "id": 491,
        "name": "コロトック",
        "height": 1,
        "weight": 25.5
    },
    {
        "id": 492,
        "name": "コリンク",
        "height": 0.5,
        "weight": 9.5
    },
    {
        "id": 493,
        "name": "ルクシオ",
        "height": 0.9,
        "weight": 30.5
    },
    {
        "id": 494,
        "name": "レントラー",
        "height": 1.4,
        "weight": 42
    },
    {
        "id": 495,
        "name": "スボミー",
        "height": 0.2,
        "weight": 1.2
    },
    {
        "id": 496,
        "name": "ロズレイド",
        "height": 0.9,
        "weight": 14.5
    },
    {
        "id": 497,
        "name": "ズガイドス",
        "height": 0.9,
        "weight": 31.5
    },
    {
        "id": 498,
        "name": "ラムパルド",
        "height": 1.6,
        "weight": 102.5
    },
    {
        "id": 499,
        "name": "タテトプス",
        "height": 0.5,
        "weight": 57
    },
    {
        "id": 500,
        "name": "トリデプス",
        "height": 1.3,
        "weight": 149.5
    },
    {
        "id": 501,
        "name": "ミノムッチ",
        "height": 0.2,
        "weight": 3.4
    },
    {
        "id": 502,
        "name": "ミノマダム",
        "height": 0.5,
        "weight": 6.5
    },
    {
        "id": 503,
        "name": "ガーメイル",
        "height": 0.9,
        "weight": 23.3
    },
    {
        "id": 504,
        "name": "ミツハニー",
        "height": 0.3,
        "weight": 5.5
    },
    {
        "id": 505,
        "name": "ビークイン",
        "height": 1.2,
        "weight": 38.5
    },
    {
        "id": 506,
        "name": "パチリス",
        "height": 0.4,
        "weight": 3.9
    },
    {
        "id": 507,
        "name": "ブイゼル",
        "height": 0.7,
        "weight": 29.5
    },
    {
        "id": 508,
        "name": "フローゼル",
        "height": 1.1,
        "weight": 33.5
    },
    {
        "id": 509,
        "name": "チェリンボ",
        "height": 0.4,
        "weight": 3.3
    },
    {
        "id": 510,
        "name": "チェリム",
        "height": 0.5,
        "weight": 9.3
    },
    {
        "id": 511,
        "name": "カラナクシ",
        "height": 0.3,
        "weight": 6.3
    },
    {
        "id": 512,
        "name": "トリトドン",
        "height": 0.9,
        "weight": 29.9
    },
    {
        "id": 513,
        "name": "エテボース",
        "height": 1.2,
        "weight": 20.3
    },
    {
        "id": 514,
        "name": "フワンテ",
        "height": 0.4,
        "weight": 1.2
    },
    {
        "id": 515,
        "name": "フワライド",
        "height": 1.2,
        "weight": 15
    },
    {
        "id": 516,
        "name": "ミミロル",
        "height": 0.4,
        "weight": 5.5
    },
    {
        "id": 517,
        "name": "ミミロップ",
        "height": 1.2,
        "weight": 33.3
    },
    {
        "id": 518,
        "name": "メガミミロップ",
        "height": 1.3,
        "weight": 28.3
    },
    {
        "id": 519,
        "name": "ムウマージ",
        "height": 0.9,
        "weight": 4.4
    },
    {
        "id": 520,
        "name": "ドンカラス",
        "height": 0.9,
        "weight": 27.3
    },
    {
        "id": 521,
        "name": "ニャルマー",
        "height": 0.5,
        "weight": 3.9
    },
    {
        "id": 522,
        "name": "ブニャット",
        "height": 1,
        "weight": 43.8
    },
    {
        "id": 523,
        "name": "リーシャン",
        "height": 0.2,
        "weight": 0.6
    },
    {
        "id": 524,
        "name": "スカンプー",
        "height": 0.4,
        "weight": 19.2
    },
    {
        "id": 525,
        "name": "スカタンク",
        "height": 1,
        "weight": 38
    },
    {
        "id": 526,
        "name": "ドーミラー",
        "height": 0.5,
        "weight": 60.5
    },
    {
        "id": 527,
        "name": "ドータクン",
        "height": 1.3,
        "weight": 187
    },
    {
        "id": 528,
        "name": "ウソハチ",
        "height": 0.5,
        "weight": 15
    },
    {
        "id": 529,
        "name": "マネネ",
        "height": 0.6,
        "weight": 13
    },
    {
        "id": 530,
        "name": "ピンプク",
        "height": 0.6,
        "weight": 24.4
    },
    {
        "id": 531,
        "name": "ペラップ",
        "height": 0.5,
        "weight": 1.9
    },
    {
        "id": 532,
        "name": "ミカルゲ",
        "height": 1,
        "weight": 108
    },
    {
        "id": 533,
        "name": "フカマル",
        "height": 0.7,
        "weight": 20.5
    },
    {
        "id": 534,
        "name": "ガバイト",
        "height": 1.4,
        "weight": 56
    },
    {
        "id": 535,
        "name": "ガブリアス",
        "height": 1.9,
        "weight": 95
    },
    {
        "id": 536,
        "name": "メガガブリアス",
        "height": 1.9,
        "weight": 95
    },
    {
        "id": 537,
        "name": "ゴンベ",
        "height": 0.6,
        "weight": 105
    },
    {
        "id": 538,
        "name": "リオル",
        "height": 0.7,
        "weight": 20.2
    },
    {
        "id": 539,
        "name": "ルカリオ",
        "height": 1.2,
        "weight": 54
    },
    {
        "id": 540,
        "name": "メガルカリオ",
        "height": 1.3,
        "weight": 57.5
    },
    {
        "id": 541,
        "name": "ヒポポタス",
        "height": 0.8,
        "weight": 49.5
    },
    {
        "id": 542,
        "name": "カバルドン",
        "height": 2,
        "weight": 300
    },
    {
        "id": 543,
        "name": "スコルピ",
        "height": 0.8,
        "weight": 12
    },
    {
        "id": 544,
        "name": "ドラピオン",
        "height": 1.3,
        "weight": 61.5
    },
    {
        "id": 545,
        "name": "グレッグル",
        "height": 0.7,
        "weight": 23
    },
    {
        "id": 546,
        "name": "ドクロッグ",
        "height": 1.3,
        "weight": 44.4
    },
    {
        "id": 547,
        "name": "マスキッパ",
        "height": 1.4,
        "weight": 27
    },
    {
        "id": 548,
        "name": "ケイコウオ",
        "height": 0.4,
        "weight": 7
    },
    {
        "id": 549,
        "name": "ネオラント",
        "height": 1.2,
        "weight": 24
    },
    {
        "id": 550,
        "name": "タマンタ",
        "height": 1,
        "weight": 65
    },
    {
        "id": 551,
        "name": "ユキカブリ",
        "height": 1,
        "weight": 50.5
    },
    {
        "id": 552,
        "name": "ユキノオー",
        "height": 2.2,
        "weight": 135.5
    },
    {
        "id": 553,
        "name": "メガユキノオー",
        "height": 2.7,
        "weight": 185
    },
    {
        "id": 554,
        "name": "マニューラ",
        "height": 1.1,
        "weight": 34
    },
    {
        "id": 555,
        "name": "ジバコイル",
        "height": 1.2,
        "weight": 180
    },
    {
        "id": 556,
        "name": "ベロベルト",
        "height": 1.7,
        "weight": 140
    },
    {
        "id": 557,
        "name": "ドサイドン",
        "height": 2.4,
        "weight": 282.8
    },
    {
        "id": 558,
        "name": "モジャンボ",
        "height": 2,
        "weight": 128.6
    },
    {
        "id": 559,
        "name": "エレキブル",
        "height": 1.8,
        "weight": 138.6
    },
    {
        "id": 560,
        "name": "ブーバーン",
        "height": 1.6,
        "weight": 68
    },
    {
        "id": 561,
        "name": "トゲキッス",
        "height": 1.5,
        "weight": 38
    },
    {
        "id": 562,
        "name": "メガヤンマ",
        "height": 1.9,
        "weight": 51.5
    },
    {
        "id": 563,
        "name": "リーフィア",
        "height": 1,
        "weight": 25.5
    },
    {
        "id": 564,
        "name": "グレイシア",
        "height": 0.8,
        "weight": 25.9
    },
    {
        "id": 565,
        "name": "グライオン",
        "height": 2,
        "weight": 42.5
    },
    {
        "id": 566,
        "name": "マンムー",
        "height": 2.5,
        "weight": 291
    },
    {
        "id": 567,
        "name": "ポリゴンZ",
        "height": 0.9,
        "weight": 34
    },
    {
        "id": 568,
        "name": "エルレイド",
        "height": 1.6,
        "weight": 52
    },
    {
        "id": 569,
        "name": "メガエルレイド",
        "height": 1.6,
        "weight": 56.4
    },
    {
        "id": 570,
        "name": "ダイノーズ",
        "height": 1.4,
        "weight": 340
    },
    {
        "id": 571,
        "name": "ヨノワール",
        "height": 2.2,
        "weight": 106.6
    },
    {
        "id": 572,
        "name": "ユキメノコ",
        "height": 1.3,
        "weight": 26.6
    },
    {
        "id": 573,
        "name": "ロトム",
        "height": 0.3,
        "weight": 0.3
    },
    {
        "id": 574,
        "name": "ユクシー",
        "height": 0.3,
        "weight": 0.3
    },
    {
        "id": 575,
        "name": "エムリット",
        "height": 0.3,
        "weight": 0.3
    },
    {
        "id": 576,
        "name": "アグノム",
        "height": 0.3,
        "weight": 0.3
    },
    {
        "id": 577,
        "name": "ディアルガ",
        "height": 5.4,
        "weight": 683
    },
    {
        "id": 578,
        "name": "ディアルガ(オリジンフォルム)",
        "height": 7,
        "weight": 850
    },
    {
        "id": 579,
        "name": "パルキア",
        "height": 4.2,
        "weight": 336
    },
    {
        "id": 580,
        "name": "パルキア(オリジンフォルム)",
        "height": 6.3,
        "weight": 660
    },
    {
        "id": 581,
        "name": "ヒードラン",
        "height": 1.7,
        "weight": 430
    },
    {
        "id": 582,
        "name": "レジギガス",
        "height": 3.7,
        "weight": 420
    },
    {
        "id": 583,
        "name": "ギラティナ(アナザーフォルム)",
        "height": 4.5,
        "weight": 750
    },
    {
        "id": 584,
        "name": "ギラティナ(オリジンフォルム)",
        "height": 6.9,
        "weight": 650
    },
    {
        "id": 585,
        "name": "クレセリア",
        "height": 1.5,
        "weight": 85.6
    },
    {
        "id": 586,
        "name": "フィオネ",
        "height": 0.4,
        "weight": 3.1
    },
    {
        "id": 587,
        "name": "マナフィ",
        "height": 0.3,
        "weight": 1.4
    },
    {
        "id": 588,
        "name": "ダークライ",
        "height": 1.5,
        "weight": 50.5
    },
    {
        "id": 589,
        "name": "シェイミ(ランドフォルム)",
        "height": 0.2,
        "weight": 2.1
    },
    {
        "id": 590,
        "name": "シェイミ(スカイフォルム)",
        "height": 0.4,
        "weight": 5.2
    },
    {
        "id": 591,
        "name": "アルセウス",
        "height": 3.2,
        "weight": 320
    },
    {
        "id": 592,
        "name": "ビクティニ",
        "height": 0.4,
        "weight": 4
    },
    {
        "id": 593,
        "name": "ツタージャ",
        "height": 0.6,
        "weight": 8.1
    },
    {
        "id": 594,
        "name": "ジャノビー",
        "height": 0.8,
        "weight": 16
    },
    {
        "id": 595,
        "name": "ジャローダ",
        "height": 3.3,
        "weight": 63
    },
    {
        "id": 596,
        "name": "ポカブ",
        "height": 0.5,
        "weight": 9.9
    },
    {
        "id": 597,
        "name": "チャオブー",
        "height": 1,
        "weight": 55.5
    },
    {
        "id": 598,
        "name": "エンブオー",
        "height": 1.6,
        "weight": 150
    },
    {
        "id": 599,
        "name": "ミジュマル",
        "height": 0.5,
        "weight": 5.9
    },
    {
        "id": 600,
        "name": "フタチマル",
        "height": 0.8,
        "weight": 24.5
    },
    {
        "id": 601,
        "name": "ダイケンキ",
        "height": 1.5,
        "weight": 94.6
    },
    {
        "id": 602,
        "name": "ダイケンキ(ヒスイのすがた)",
        "height": 1.5,
        "weight": 58.2
    },
    {
        "id": 603,
        "name": "ミネズミ",
        "height": 0.5,
        "weight": 11.6
    },
    {
        "id": 604,
        "name": "ミルホッグ",
        "height": 1.1,
        "weight": 27
    },
    {
        "id": 605,
        "name": "ヨーテリー",
        "height": 0.4,
        "weight": 4.1
    },
    {
        "id": 606,
        "name": "ハーデリア",
        "height": 0.9,
        "weight": 14.7
    },
    {
        "id": 607,
        "name": "ムーランド",
        "height": 1.2,
        "weight": 61
    },
    {
        "id": 608,
        "name": "チョロネコ",
        "height": 0.4,
        "weight": 10.1
    },
    {
        "id": 609,
        "name": "レパルダス",
        "height": 1.1,
        "weight": 37.5
    },
    {
        "id": 610,
        "name": "ヤナップ",
        "height": 0.6,
        "weight": 10.5
    },
    {
        "id": 611,
        "name": "ヤナッキー",
        "height": 1.1,
        "weight": 30.5
    },
    {
        "id": 612,
        "name": "バオップ",
        "height": 0.6,
        "weight": 11
    },
    {
        "id": 613,
        "name": "バオッキー",
        "height": 1,
        "weight": 28
    },
    {
        "id": 614,
        "name": "ヒヤップ",
        "height": 0.6,
        "weight": 13.5
    },
    {
        "id": 615,
        "name": "ヒヤッキー",
        "height": 1,
        "weight": 29
    },
    {
        "id": 616,
        "name": "ムンナ",
        "height": 0.6,
        "weight": 23.3
    },
    {
        "id": 617,
        "name": "ムシャーナ",
        "height": 1.1,
        "weight": 60.5
    },
    {
        "id": 618,
        "name": "マメパト",
        "height": 0.3,
        "weight": 2.1
    },
    {
        "id": 619,
        "name": "ハトーボー",
        "height": 0.6,
        "weight": 15
    },
    {
        "id": 620,
        "name": "ケンホロウ",
        "height": 1.2,
        "weight": 29
    },
    {
        "id": 621,
        "name": "シママ",
        "height": 0.8,
        "weight": 29.8
    },
    {
        "id": 622,
        "name": "ゼブライカ",
        "height": 1.6,
        "weight": 79.5
    },
    {
        "id": 623,
        "name": "ダンゴロ",
        "height": 0.4,
        "weight": 18
    },
    {
        "id": 624,
        "name": "ガントル",
        "height": 0.9,
        "weight": 102
    },
    {
        "id": 625,
        "name": "ギガイアス",
        "height": 1.7,
        "weight": 260
    },
    {
        "id": 626,
        "name": "コロモリ",
        "height": 0.4,
        "weight": 2.1
    },
    {
        "id": 627,
        "name": "ココロモリ",
        "height": 0.9,
        "weight": 10.5
    },
    {
        "id": 628,
        "name": "モグリュー",
        "height": 0.3,
        "weight": 8.5
    },
    {
        "id": 629,
        "name": "ドリュウズ",
        "height": 0.7,
        "weight": 40.4
    },
    {
        "id": 630,
        "name": "タブンネ",
        "height": 1.1,
        "weight": 31
    },
    {
        "id": 631,
        "name": "メガタブンネ",
        "height": 1.5,
        "weight": 32
    },
    {
        "id": 632,
        "name": "ドッコラー",
        "height": 0.6,
        "weight": 12.5
    },
    {
        "id": 633,
        "name": "ドテッコツ",
        "height": 1.2,
        "weight": 40
    },
    {
        "id": 634,
        "name": "ローブシン",
        "height": 1.4,
        "weight": 87
    },
    {
        "id": 635,
        "name": "オタマロ",
        "height": 0.5,
        "weight": 4.5
    },
    {
        "id": 636,
        "name": "ガマガル",
        "height": 0.8,
        "weight": 17
    },
    {
        "id": 637,
        "name": "ガマゲロゲ",
        "height": 1.5,
        "weight": 62
    },
    {
        "id": 638,
        "name": "ナゲキ",
        "height": 1.3,
        "weight": 55.5
    },
    {
        "id": 639,
        "name": "ダゲキ",
        "height": 1.4,
        "weight": 51
    },
    {
        "id": 640,
        "name": "クルミル",
        "height": 0.3,
        "weight": 2.5
    },
    {
        "id": 641,
        "name": "クルマユ",
        "height": 0.5,
        "weight": 7.3
    },
    {
        "id": 642,
        "name": "ハハコモリ",
        "height": 1.2,
        "weight": 20.5
    },
    {
        "id": 643,
        "name": "フシデ",
        "height": 0.4,
        "weight": 5.3
    },
    {
        "id": 644,
        "name": "ホイーガ",
        "height": 1.2,
        "weight": 58.5
    },
    {
        "id": 645,
        "name": "ペンドラー",
        "height": 2.5,
        "weight": 200.5
    },
    {
        "id": 646,
        "name": "モンメン",
        "height": 0.3,
        "weight": 0.6
    },
    {
        "id": 647,
        "name": "エルフーン",
        "height": 0.7,
        "weight": 6.6
    },
    {
        "id": 648,
        "name": "チュリネ",
        "height": 0.5,
        "weight": 6.6
    },
    {
        "id": 649,
        "name": "ドレディア",
        "height": 1.1,
        "weight": 16.3
    },
    {
        "id": 650,
        "name": "ドレディア(ヒスイのすがた)",
        "height": 1.2,
        "weight": 19.2
    },
    {
        "id": 651,
        "name": "バスラオ",
        "height": 1,
        "weight": 18
    },
    {
        "id": 652,
        "name": "メグロコ",
        "height": 0.7,
        "weight": 15.2
    },
    {
        "id": 653,
        "name": "ワルビル",
        "height": 1,
        "weight": 33.4
    },
    {
        "id": 654,
        "name": "ワルビアル",
        "height": 1.5,
        "weight": 96.3
    },
    {
        "id": 655,
        "name": "ダルマッカ",
        "height": 0.6,
        "weight": 37.5
    },
    {
        "id": 656,
        "name": "ダルマッカ(ガラルのすがた)",
        "height": 0.7,
        "weight": 40
    },
    {
        "id": 657,
        "name": "ヒヒダルマ",
        "height": 1.3,
        "weight": 92.9
    },
    {
        "id": 658,
        "name": "ヒヒダルマ(ガラルのすがた)",
        "height": 1.7,
        "weight": 120
    },
    {
        "id": 659,
        "name": "マラカッチ",
        "height": 1,
        "weight": 28
    },
    {
        "id": 660,
        "name": "イシズマイ",
        "height": 0.3,
        "weight": 14.5
    },
    {
        "id": 661,
        "name": "イワパレス",
        "height": 1.4,
        "weight": 200
    },
    {
        "id": 662,
        "name": "ズルッグ",
        "height": 0.6,
        "weight": 11.8
    },
    {
        "id": 663,
        "name": "ズルズキン",
        "height": 1.1,
        "weight": 30
    },
    {
        "id": 664,
        "name": "シンボラー",
        "height": 1.4,
        "weight": 14
    },
    {
        "id": 665,
        "name": "デスマス",
        "height": 0.5,
        "weight": 1.5
    },
    {
        "id": 666,
        "name": "デスマス(ガラルのすがた)",
        "height": 0.5,
        "weight": 1.5
    },
    {
        "id": 667,
        "name": "デスカーン",
        "height": 1.7,
        "weight": 76.5
    },
    {
        "id": 668,
        "name": "プロトーガ",
        "height": 0.7,
        "weight": 16.5
    },
    {
        "id": 669,
        "name": "アバゴーラ",
        "height": 1.2,
        "weight": 81
    },
    {
        "id": 670,
        "name": "アーケン",
        "height": 0.5,
        "weight": 9.5
    },
    {
        "id": 671,
        "name": "アーケオス",
        "height": 1.4,
        "weight": 32
    },
    {
        "id": 672,
        "name": "ヤブクロン",
        "height": 0.6,
        "weight": 31
    },
    {
        "id": 673,
        "name": "ダストダス",
        "height": 1.9,
        "weight": 107.3
    },
    {
        "id": 674,
        "name": "ゾロア",
        "height": 0.7,
        "weight": 12.5
    },
    {
        "id": 675,
        "name": "ゾロア(ヒスイのすがた)",
        "height": 0.7,
        "weight": 12.5
    },
    {
        "id": 676,
        "name": "ゾロアーク",
        "height": 1.6,
        "weight": 81.1
    },
    {
        "id": 677,
        "name": "ゾロアーク(ヒスイのすがた)",
        "height": 1.6,
        "weight": 73
    },
    {
        "id": 678,
        "name": "チラーミィ",
        "height": 0.4,
        "weight": 5.8
    },
    {
        "id": 679,
        "name": "チラチーノ",
        "height": 0.5,
        "weight": 7.5
    },
    {
        "id": 680,
        "name": "ゴチム",
        "height": 0.4,
        "weight": 5.8
    },
    {
        "id": 681,
        "name": "ゴチミル",
        "height": 0.7,
        "weight": 18
    },
    {
        "id": 682,
        "name": "ゴチルゼル",
        "height": 1.5,
        "weight": 44
    },
    {
        "id": 683,
        "name": "ユニラン",
        "height": 0.3,
        "weight": 1
    },
    {
        "id": 684,
        "name": "ダブラン",
        "height": 0.6,
        "weight": 8
    },
    {
        "id": 685,
        "name": "ランクルス",
        "height": 1,
        "weight": 20.1
    },
    {
        "id": 686,
        "name": "コアルヒー",
        "height": 0.5,
        "weight": 5.5
    },
    {
        "id": 687,
        "name": "スワンナ",
        "height": 1.3,
        "weight": 24.2
    },
    {
        "id": 688,
        "name": "バニプッチ",
        "height": 0.4,
        "weight": 5.7
    },
    {
        "id": 689,
        "name": "バニリッチ",
        "height": 1.1,
        "weight": 41
    },
    {
        "id": 690,
        "name": "バイバニラ",
        "height": 1.3,
        "weight": 57.5
    },
    {
        "id": 691,
        "name": "シキジカ",
        "height": 0.6,
        "weight": 19.5
    },
    {
        "id": 692,
        "name": "メブキジカ",
        "height": 1.9,
        "weight": 92.5
    },
    {
        "id": 693,
        "name": "エモンガ",
        "height": 0.4,
        "weight": 5
    },
    {
        "id": 694,
        "name": "カブルモ",
        "height": 0.5,
        "weight": 5.9
    },
    {
        "id": 695,
        "name": "シュバルゴ",
        "height": 1,
        "weight": 33
    },
    {
        "id": 696,
        "name": "タマゲタケ",
        "height": 0.2,
        "weight": 1
    },
    {
        "id": 697,
        "name": "モロバレル",
        "height": 0.6,
        "weight": 10.5
    },
    {
        "id": 698,
        "name": "プルリル",
        "height": 1.2,
        "weight": 33
    },
    {
        "id": 699,
        "name": "ブルンゲル",
        "height": 2.2,
        "weight": 135
    },
    {
        "id": 700,
        "name": "ママンボウ",
        "height": 1.2,
        "weight": 31.6
    },
    {
        "id": 701,
        "name": "バチュル",
        "height": 0.1,
        "weight": 0.6
    },
    {
        "id": 702,
        "name": "デンチュラ",
        "height": 0.8,
        "weight": 14.3
    },
    {
        "id": 703,
        "name": "テッシード",
        "height": 0.6,
        "weight": 18.8
    },
    {
        "id": 704,
        "name": "ナットレイ",
        "height": 1,
        "weight": 110
    },
    {
        "id": 705,
        "name": "ギアル",
        "height": 0.3,
        "weight": 21
    },
    {
        "id": 706,
        "name": "ギギアル",
        "height": 0.6,
        "weight": 51
    },
    {
        "id": 707,
        "name": "ギギギアル",
        "height": 0.6,
        "weight": 81
    },
    {
        "id": 708,
        "name": "シビシラス",
        "height": 0.2,
        "weight": 0.3
    },
    {
        "id": 709,
        "name": "シビビール",
        "height": 1.2,
        "weight": 22
    },
    {
        "id": 710,
        "name": "シビルドン",
        "height": 2.1,
        "weight": 80.5
    },
    {
        "id": 711,
        "name": "リグレー",
        "height": 0.5,
        "weight": 9
    },
    {
        "id": 712,
        "name": "オーベム",
        "height": 1,
        "weight": 34.5
    },
    {
        "id": 713,
        "name": "ヒトモシ",
        "height": 0.3,
        "weight": 3.1
    },
    {
        "id": 714,
        "name": "ランプラー",
        "height": 0.6,
        "weight": 13
    },
    {
        "id": 715,
        "name": "シャンデラ",
        "height": 1,
        "weight": 34.3
    },
    {
        "id": 716,
        "name": "キバゴ",
        "height": 0.6,
        "weight": 18
    },
    {
        "id": 717,
        "name": "オノンド",
        "height": 1,
        "weight": 36
    },
    {
        "id": 718,
        "name": "オノノクス",
        "height": 1.8,
        "weight": 105.5
    },
    {
        "id": 719,
        "name": "クマシュン",
        "height": 0.5,
        "weight": 8.5
    },
    {
        "id": 720,
        "name": "ツンベアー",
        "height": 2.6,
        "weight": 260
    },
    {
        "id": 721,
        "name": "フリージオ",
        "height": 1.1,
        "weight": 148
    },
    {
        "id": 722,
        "name": "チョボマキ",
        "height": 0.4,
        "weight": 7.7
    },
    {
        "id": 723,
        "name": "アギルダー",
        "height": 0.8,
        "weight": 25.3
    },
    {
        "id": 724,
        "name": "マッギョ",
        "height": 0.7,
        "weight": 11
    },
    {
        "id": 725,
        "name": "マッギョ(ガラルのすがた)",
        "height": 0.7,
        "weight": 20.5
    },
    {
        "id": 726,
        "name": "コジョフー",
        "height": 0.9,
        "weight": 20
    },
    {
        "id": 727,
        "name": "コジョンド",
        "height": 1.4,
        "weight": 35.5
    },
    {
        "id": 728,
        "name": "クリムガン",
        "height": 1.6,
        "weight": 139
    },
    {
        "id": 729,
        "name": "ゴビット",
        "height": 1,
        "weight": 92
    },
    {
        "id": 730,
        "name": "ゴルーグ",
        "height": 2.8,
        "weight": 330
    },
    {
        "id": 731,
        "name": "コマタナ",
        "height": 0.5,
        "weight": 10.2
    },
    {
        "id": 732,
        "name": "キリキザン",
        "height": 1.6,
        "weight": 70
    },
    {
        "id": 733,
        "name": "バッフロン",
        "height": 1.6,
        "weight": 94.6
    },
    {
        "id": 734,
        "name": "ワシボン",
        "height": 0.5,
        "weight": 10.5
    },
    {
        "id": 735,
        "name": "ウォーグル",
        "height": 1.5,
        "weight": 41
    },
    {
        "id": 736,
        "name": "ウォーグル(ヒスイのすがた)",
        "height": 1.7,
        "weight": 43.4
    },
    {
        "id": 737,
        "name": "バルチャイ",
        "height": 0.5,
        "weight": 9
    },
    {
        "id": 738,
        "name": "バルジーナ",
        "height": 1.2,
        "weight": 39.5
    },
    {
        "id": 739,
        "name": "クイタラン",
        "height": 1.4,
        "weight": 58
    },
    {
        "id": 740,
        "name": "アイアント",
        "height": 0.3,
        "weight": 33
    },
    {
        "id": 741,
        "name": "モノズ",
        "height": 0.8,
        "weight": 17.3
    },
    {
        "id": 742,
        "name": "ジヘッド",
        "height": 1.4,
        "weight": 50
    },
    {
        "id": 743,
        "name": "サザンドラ",
        "height": 1.8,
        "weight": 160
    },
    {
        "id": 744,
        "name": "メラルバ",
        "height": 1.1,
        "weight": 28.8
    },
    {
        "id": 745,
        "name": "ウルガモス",
        "height": 1.6,
        "weight": 46
    },
    {
        "id": 746,
        "name": "コバルオン",
        "height": 2.1,
        "weight": 250
    },
    {
        "id": 747,
        "name": "テラキオン",
        "height": 1.9,
        "weight": 260
    },
    {
        "id": 748,
        "name": "ビリジオン",
        "height": 2,
        "weight": 200
    },
    {
        "id": 749,
        "name": "トルネロス(けしんフォルム)",
        "height": 1.5,
        "weight": 63
    },
    {
        "id": 750,
        "name": "トルネロス(れいじゅうフォルム)",
        "height": 1.4,
        "weight": 63
    },
    {
        "id": 751,
        "name": "ボルトロス(けしんフォルム)",
        "height": 1.5,
        "weight": 61
    },
    {
        "id": 752,
        "name": "ボルトロス(れいじゅうフォルム)",
        "height": 3,
        "weight": 61
    },
    {
        "id": 753,
        "name": "レシラム",
        "height": 3.2,
        "weight": 330
    },
    {
        "id": 754,
        "name": "ゼクロム",
        "height": 2.9,
        "weight": 345
    },
    {
        "id": 755,
        "name": "ランドロス(けしんフォルム)",
        "height": 1.5,
        "weight": 68
    },
    {
        "id": 756,
        "name": "ランドロス(れいじゅうフォルム)",
        "height": 1.3,
        "weight": 68
    },
    {
        "id": 757,
        "name": "キュレム",
        "height": 3,
        "weight": 325
    },
    {
        "id": 758,
        "name": "キュレム(ホワイトキュレム)",
        "height": 3.6,
        "weight": 325
    },
    {
        "id": 759,
        "name": "キュレム(ブラックキュレム)",
        "height": 3.3,
        "weight": 325
    },
    {
        "id": 760,
        "name": "ケルディオ",
        "height": 1.4,
        "weight": 48.5
    },
    {
        "id": 761,
        "name": "メロエッタ",
        "height": 0.6,
        "weight": 6.5
    },
    {
        "id": 762,
        "name": "ゲノセクト",
        "height": 1.5,
        "weight": 82.5
    },
    {
        "id": 763,
        "name": "ハリマロン",
        "height": 0.4,
        "weight": 9
    },
    {
        "id": 764,
        "name": "ハリボーグ",
        "height": 0.7,
        "weight": 29
    },
    {
        "id": 765,
        "name": "ブリガロン",
        "height": 1.6,
        "weight": 90
    },
    {
        "id": 766,
        "name": "フォッコ",
        "height": 0.4,
        "weight": 9.4
    },
    {
        "id": 767,
        "name": "テールナー",
        "height": 1,
        "weight": 14.5
    },
    {
        "id": 768,
        "name": "マフォクシー",
        "height": 1.5,
        "weight": 39
    },
    {
        "id": 769,
        "name": "ケロマツ",
        "height": 0.3,
        "weight": 7
    },
    {
        "id": 770,
        "name": "ゲコガシラ",
        "height": 0.6,
        "weight": 10.9
    },
    {
        "id": 771,
        "name": "ゲッコウガ",
        "height": 1.5,
        "weight": 40
    },
    {
        "id": 772,
        "name": "ゲッコウガ(サトシゲッコウガ)",
        "height": 1.5,
        "weight": 40
    },
    {
        "id": 773,
        "name": "ホルビー",
        "height": 0.4,
        "weight": 5
    },
    {
        "id": 774,
        "name": "ホルード",
        "height": 1,
        "weight": 42.4
    },
    {
        "id": 775,
        "name": "ヤヤコマ",
        "height": 0.3,
        "weight": 1.7
    },
    {
        "id": 776,
        "name": "ヒノヤコマ",
        "height": 0.7,
        "weight": 16
    },
    {
        "id": 777,
        "name": "ファイアロー",
        "height": 1.2,
        "weight": 24.5
    },
    {
        "id": 778,
        "name": "コフキムシ",
        "height": 0.3,
        "weight": 2.5
    },
    {
        "id": 779,
        "name": "コフーライ",
        "height": 0.3,
        "weight": 8.4
    },
    {
        "id": 780,
        "name": "ビビヨン",
        "height": 1.2,
        "weight": 17
    },
    {
        "id": 781,
        "name": "シシコ",
        "height": 0.6,
        "weight": 13.5
    },
    {
        "id": 782,
        "name": "カエンジシ",
        "height": 1.5,
        "weight": 81.5
    },
    {
        "id": 783,
        "name": "フラベベ",
        "height": 0.1,
        "weight": 0.1
    },
    {
        "id": 784,
        "name": "フラエッテ",
        "height": 0.2,
        "weight": 0.9
    },
    {
        "id": 785,
        "name": "フラージェス",
        "height": 1.1,
        "weight": 10
    },
    {
        "id": 786,
        "name": "メェークル",
        "height": 0.9,
        "weight": 31
    },
    {
        "id": 787,
        "name": "ゴーゴート",
        "height": 1.7,
        "weight": 91
    },
    {
        "id": 788,
        "name": "ヤンチャム",
        "height": 0.6,
        "weight": 8
    },
    {
        "id": 789,
        "name": "ゴロンダ",
        "height": 2.1,
        "weight": 136
    },
    {
        "id": 790,
        "name": "トリミアン",
        "height": 1.2,
        "weight": 28
    },
    {
        "id": 791,
        "name": "ニャスパー",
        "height": 0.3,
        "weight": 3.5
    },
    {
        "id": 792,
        "name": "ニャオニクス",
        "height": 0.6,
        "weight": 8.5
    },
    {
        "id": 793,
        "name": "ヒトツキ",
        "height": 0.8,
        "weight": 2
    },
    {
        "id": 794,
        "name": "ニダンギル",
        "height": 0.8,
        "weight": 4.5
    },
    {
        "id": 795,
        "name": "ギルガルド",
        "height": 1.7,
        "weight": 53
    },
    {
        "id": 796,
        "name": "シュシュプ",
        "height": 0.2,
        "weight": 0.5
    },
    {
        "id": 797,
        "name": "フレフワン",
        "height": 0.8,
        "weight": 15.5
    },
    {
        "id": 798,
        "name": "ペロッパフ",
        "height": 0.4,
        "weight": 3.5
    },
    {
        "id": 799,
        "name": "ペロリーム",
        "height": 0.8,
        "weight": 5
    },
    {
        "id": 800,
        "name": "マーイーカ",
        "height": 0.4,
        "weight": 3.5
    },
    {
        "id": 801,
        "name": "カラマネロ",
        "height": 1.5,
        "weight": 47
    },
    {
        "id": 802,
        "name": "カメテテ",
        "height": 0.5,
        "weight": 31
    },
    {
        "id": 803,
        "name": "ガメノデス",
        "height": 1.3,
        "weight": 96
    },
    {
        "id": 804,
        "name": "クズモー",
        "height": 0.5,
        "weight": 7.3
    },
    {
        "id": 805,
        "name": "ドラミドロ",
        "height": 1.8,
        "weight": 81.5
    },
    {
        "id": 806,
        "name": "ウデッポウ",
        "height": 0.5,
        "weight": 8.3
    },
    {
        "id": 807,
        "name": "ブロスター",
        "height": 1.3,
        "weight": 35.3
    },
    {
        "id": 808,
        "name": "エリキテル",
        "height": 0.5,
        "weight": 6
    },
    {
        "id": 809,
        "name": "エレザード",
        "height": 1,
        "weight": 21
    },
    {
        "id": 810,
        "name": "チゴラス",
        "height": 0.8,
        "weight": 26
    },
    {
        "id": 811,
        "name": "ガチゴラス",
        "height": 2.5,
        "weight": 270
    },
    {
        "id": 812,
        "name": "アマルス",
        "height": 1.3,
        "weight": 25.2
    },
    {
        "id": 813,
        "name": "アマルルガ",
        "height": 2.7,
        "weight": 225
    },
    {
        "id": 814,
        "name": "ニンフィア",
        "height": 1,
        "weight": 23.5
    },
    {
        "id": 815,
        "name": "ルチャブル",
        "height": 0.8,
        "weight": 21.5
    },
    {
        "id": 816,
        "name": "デデンネ",
        "height": 0.2,
        "weight": 2.2
    },
    {
        "id": 817,
        "name": "メレシー",
        "height": 0.3,
        "weight": 5.7
    },
    {
        "id": 818,
        "name": "ヌメラ",
        "height": 0.3,
        "weight": 2.8
    },
    {
        "id": 819,
        "name": "ヌメイル",
        "height": 0.8,
        "weight": 17.5
    },
    {
        "id": 820,
        "name": "ヌメイル(ヒスイのすがた)",
        "height": 0.7,
        "weight": 68.5
    },
    {
        "id": 821,
        "name": "ヌメルゴン",
        "height": 2,
        "weight": 150.5
    },
    {
        "id": 822,
        "name": "ヌメルゴン(ヒスイのすがた)",
        "height": 1.7,
        "weight": 334.1
    },
    {
        "id": 823,
        "name": "クレッフィ",
        "height": 0.2,
        "weight": 3
    },
    {
        "id": 824,
        "name": "ボクレー",
        "height": 0.4,
        "weight": 7
    },
    {
        "id": 825,
        "name": "オーロット",
        "height": 1.5,
        "weight": 71
    },
    {
        "id": 826,
        "name": "バケッチャ(ちいさいサイズ)",
        "height": 0.3,
        "weight": 3.5
    },
    {
        "id": 827,
        "name": "バケッチャ(ふつうのサイズ)",
        "height": 0.4,
        "weight": 5
    },
    {
        "id": 828,
        "name": "バケッチャ(おおきいサイズ)",
        "height": 0.5,
        "weight": 7.5
    },
    {
        "id": 829,
        "name": "バケッチャ(とくだいサイズ)",
        "height": 0.8,
        "weight": 15
    },
    {
        "id": 830,
        "name": "パンプジン(ちいさいサイズ)",
        "height": 0.7,
        "weight": 9.5
    },
    {
        "id": 831,
        "name": "パンプジン(ふつうのサイズ)",
        "height": 0.9,
        "weight": 12.5
    },
    {
        "id": 832,
        "name": "パンプジン(おおきいサイズ)",
        "height": 1.1,
        "weight": 14
    },
    {
        "id": 833,
        "name": "パンプジン(とくだいサイズ)",
        "height": 1.7,
        "weight": 39
    },
    {
        "id": 834,
        "name": "カチコール",
        "height": 1,
        "weight": 99.5
    },
    {
        "id": 835,
        "name": "クレベース",
        "height": 2,
        "weight": 505
    },
    {
        "id": 836,
        "name": "クレベース(ヒスイのすがた)",
        "height": 1.4,
        "weight": 262.4
    },
    {
        "id": 837,
        "name": "オンバット",
        "height": 0.5,
        "weight": 8
    },
    {
        "id": 838,
        "name": "オンバーン",
        "height": 1.5,
        "weight": 85
    },
    {
        "id": 839,
        "name": "ゼルネアス",
        "height": 3,
        "weight": 215
    },
    {
        "id": 840,
        "name": "イベルタル",
        "height": 5.8,
        "weight": 203
    },
    {
        "id": 841,
        "name": "ジガルデ(50%フォルム)",
        "height": 5,
        "weight": 305
    },
    {
        "id": 842,
        "name": "ジガルデ(10%フォルム)",
        "height": 1.2,
        "weight": 33.5
    },
    {
        "id": 843,
        "name": "ジガルデ(パーフェクトフォルム)",
        "height": 4.5,
        "weight": 610
    },
    {
        "id": 844,
        "name": "ディアンシー",
        "height": 0.7,
        "weight": 8.8
    },
    {
        "id": 845,
        "name": "メガディアンシー",
        "height": 1.1,
        "weight": 27.8
    },
    {
        "id": 846,
        "name": "フーパ(いましめられしフーパ)",
        "height": 0.5,
        "weight": 9
    },
    {
        "id": 847,
        "name": "フーパ(ときはなたれしフーパ)",
        "height": 6.5,
        "weight": 490
    },
    {
        "id": 848,
        "name": "ボルケニオン",
        "height": 1.7,
        "weight": 195
    },
    {
        "id": 849,
        "name": "モクロー",
        "height": 0.3,
        "weight": 1.5
    },
    {
        "id": 850,
        "name": "フクスロー",
        "height": 0.7,
        "weight": 16
    },
    {
        "id": 851,
        "name": "ジュナイパー",
        "height": 1.6,
        "weight": 36.6
    },
    {
        "id": 852,
        "name": "ジュナイパー(ヒスイのすがた)",
        "height": 1.6,
        "weight": 37
    },
    {
        "id": 853,
        "name": "ニャビー",
        "height": 0.4,
        "weight": 4.3
    },
    {
        "id": 854,
        "name": "ニャヒート",
        "height": 0.7,
        "weight": 25
    },
    {
        "id": 855,
        "name": "ガオガエン",
        "height": 1.8,
        "weight": 83
    },
    {
        "id": 856,
        "name": "アシマリ",
        "height": 0.4,
        "weight": 7.5
    },
    {
        "id": 857,
        "name": "オシャマリ",
        "height": 0.6,
        "weight": 17.5
    },
    {
        "id": 858,
        "name": "アシレーヌ",
        "height": 1.8,
        "weight": 44
    },
    {
        "id": 859,
        "name": "ツツケラ",
        "height": 0.3,
        "weight": 1.2
    },
    {
        "id": 860,
        "name": "ケララッパ",
        "height": 0.6,
        "weight": 14.8
    },
    {
        "id": 861,
        "name": "ドデカバシ",
        "height": 1.1,
        "weight": 26
    },
    {
        "id": 862,
        "name": "ヤングース",
        "height": 0.4,
        "weight": 6
    },
    {
        "id": 863,
        "name": "デカグース",
        "height": 0.7,
        "weight": 14.2
    },
    {
        "id": 864,
        "name": "デカグース(ぬしサイズ)",
        "height": 1.4,
        "weight": 60
    },
    {
        "id": 865,
        "name": "アゴジムシ",
        "height": 0.4,
        "weight": 4.4
    },
    {
        "id": 866,
        "name": "デンヂムシ",
        "height": 0.5,
        "weight": 10.5
    },
    {
        "id": 867,
        "name": "クワガノン",
        "height": 1.5,
        "weight": 45
    },
    {
        "id": 868,
        "name": "クワガノン(ぬしサイズ)",
        "height": 2.6,
        "weight": 147.5
    },
    {
        "id": 869,
        "name": "マケンカニ",
        "height": 0.6,
        "weight": 7
    },
    {
        "id": 870,
        "name": "ケケンカニ",
        "height": 1.7,
        "weight": 180
    },
    {
        "id": 871,
        "name": "オドリドリ",
        "height": 0.6,
        "weight": 3.4
    },
    {
        "id": 872,
        "name": "アブリー",
        "height": 0.1,
        "weight": 0.2
    },
    {
        "id": 873,
        "name": "アブリボン",
        "height": 0.2,
        "weight": 0.5
    },
    {
        "id": 874,
        "name": "アブリボン(ぬしサイズ)",
        "height": 0.4,
        "weight": 2
    },
    {
        "id": 875,
        "name": "イワンコ",
        "height": 0.5,
        "weight": 9.2
    },
    {
        "id": 876,
        "name": "ルガルガン(まひるのすがた)",
        "height": 0.8,
        "weight": 25
    },
    {
        "id": 877,
        "name": "ルガルガン(まよなかのすがた)",
        "height": 1.1,
        "weight": 25
    },
    {
        "id": 878,
        "name": "ルガルガン(たそがれのすがた)",
        "height": 0.8,
        "weight": 25
    },
    {
        "id": 879,
        "name": "ヨワシ(たんどくのすがた)",
        "height": 0.2,
        "weight": 0.3
    },
    {
        "id": 880,
        "name": "ヨワシ(むれたすがた)",
        "height": 8.2,
        "weight": 78.6
    },
    {
        "id": 881,
        "name": "ヒドイデ",
        "height": 0.4,
        "weight": 8
    },
    {
        "id": 882,
        "name": "ドヒドイデ",
        "height": 0.7,
        "weight": 14.5
    },
    {
        "id": 883,
        "name": "ドロバンコ",
        "height": 1,
        "weight": 110
    },
    {
        "id": 884,
        "name": "バンバドロ",
        "height": 2.5,
        "weight": 920
    },
    {
        "id": 885,
        "name": "シズクモ",
        "height": 0.3,
        "weight": 4
    },
    {
        "id": 886,
        "name": "オニシズクモ",
        "height": 1.8,
        "weight": 82
    },
    {
        "id": 887,
        "name": "オニシズクモ(ぬしサイズ)",
        "height": 3.1,
        "weight": 217.5
    },
    {
        "id": 888,
        "name": "カリキリ",
        "height": 0.3,
        "weight": 1.5
    },
    {
        "id": 889,
        "name": "ラランテス",
        "height": 0.9,
        "weight": 18.5
    },
    {
        "id": 890,
        "name": "ラランテス(ぬしサイズ)",
        "height": 1.5,
        "weight": 58
    },
    {
        "id": 891,
        "name": "ネマシュ",
        "height": 0.2,
        "weight": 1.5
    },
    {
        "id": 892,
        "name": "マシェード",
        "height": 1,
        "weight": 11.5
    },
    {
        "id": 893,
        "name": "ヤトウモリ",
        "height": 0.6,
        "weight": 4.8
    },
    {
        "id": 894,
        "name": "エンニュート",
        "height": 1.2,
        "weight": 22.2
    },
    {
        "id": 895,
        "name": "エンニュート(ぬしサイズ)",
        "height": 2.1,
        "weight": 81
    },
    {
        "id": 896,
        "name": "ヌイコグマ",
        "height": 0.5,
        "weight": 6.8
    },
    {
        "id": 897,
        "name": "キテルグマ",
        "height": 2.1,
        "weight": 135
    },
    {
        "id": 898,
        "name": "アマカジ",
        "height": 0.3,
        "weight": 3.2
    },
    {
        "id": 899,
        "name": "アママイコ",
        "height": 0.7,
        "weight": 8.2
    },
    {
        "id": 900,
        "name": "アマージョ",
        "height": 1.2,
        "weight": 21.4
    },
    {
        "id": 901,
        "name": "キュワワー",
        "height": 0.1,
        "weight": 0.3
    },
    {
        "id": 902,
        "name": "ヤレユータン",
        "height": 1.5,
        "weight": 76
    },
    {
        "id": 903,
        "name": "ナゲツケサル",
        "height": 2,
        "weight": 82.8
    },
    {
        "id": 904,
        "name": "コソクムシ",
        "height": 0.5,
        "weight": 12
    },
    {
        "id": 905,
        "name": "グソクムシャ",
        "height": 2,
        "weight": 108
    },
    {
        "id": 906,
        "name": "スナバァ",
        "height": 0.5,
        "weight": 70
    },
    {
        "id": 907,
        "name": "シロデスナ",
        "height": 1.3,
        "weight": 250
    },
    {
        "id": 908,
        "name": "ナマコブシ",
        "height": 0.3,
        "weight": 1.2
    },
    {
        "id": 909,
        "name": "タイプ:ヌル",
        "height": 1.9,
        "weight": 120.5
    },
    {
        "id": 910,
        "name": "シルヴァディ",
        "height": 2.3,
        "weight": 100.5
    },
    {
        "id": 911,
        "name": "メテノ(りゅうせいのすがた)",
        "height": 0.3,
        "weight": 40
    },
    {
        "id": 912,
        "name": "メテノ(コアのすがた)",
        "height": 0.3,
        "weight": 0.3
    },
    {
        "id": 913,
        "name": "ネッコアラ",
        "height": 0.4,
        "weight": 19.9
    },
    {
        "id": 914,
        "name": "バクガメス",
        "height": 2,
        "weight": 212
    },
    {
        "id": 915,
        "name": "トゲデマル",
        "height": 0.3,
        "weight": 3.3
    },
    {
        "id": 916,
        "name": "トゲデマル(ぬしサイズ)",
        "height": 0.6,
        "weight": 13
    },
    {
        "id": 917,
        "name": "ミミッキュ",
        "height": 0.2,
        "weight": 0.7
    },
    {
        "id": 918,
        "name": "ミミッキュ(ぬしサイズ)",
        "height": 0.4,
        "weight": 2.8
    },
    {
        "id": 919,
        "name": "ハギギシリ",
        "height": 0.9,
        "weight": 19
    },
    {
        "id": 920,
        "name": "ジジーロン",
        "height": 3,
        "weight": 185
    },
    {
        "id": 921,
        "name": "ダダリン",
        "height": 3.9,
        "weight": 210
    },
    {
        "id": 922,
        "name": "ジャラコ",
        "height": 0.6,
        "weight": 29.7
    },
    {
        "id": 923,
        "name": "ジャランゴ",
        "height": 1.2,
        "weight": 47
    },
    {
        "id": 924,
        "name": "ジャラランガ",
        "height": 1.6,
        "weight": 78.2
    },
    {
        "id": 925,
        "name": "ジャラランガ(ぬしサイズ)",
        "height": 2.4,
        "weight": 207.5
    },
    {
        "id": 926,
        "name": "カプ・コケコ",
        "height": 1.8,
        "weight": 20.5
    },
    {
        "id": 927,
        "name": "カプ・テテフ",
        "height": 1.2,
        "weight": 18.6
    },
    {
        "id": 928,
        "name": "カプ・ブルル",
        "height": 1.9,
        "weight": 45.5
    },
    {
        "id": 929,
        "name": "カプ・レヒレ",
        "height": 1.3,
        "weight": 21.2
    },
    {
        "id": 930,
        "name": "コスモッグ",
        "height": 0.2,
        "weight": 0.1
    },
    {
        "id": 931,
        "name": "コスモウム",
        "height": 0.1,
        "weight": 999.9
    },
    {
        "id": 932,
        "name": "ソルガレオ",
        "height": 3.4,
        "weight": 230
    },
    {
        "id": 933,
        "name": "ルナアーラ",
        "height": 4,
        "weight": 120
    },
    {
        "id": 934,
        "name": "ウツロイド",
        "height": 1.2,
        "weight": 55.5
    },
    {
        "id": 935,
        "name": "マッシブーン",
        "height": 2.4,
        "weight": 333.6
    },
    {
        "id": 936,
        "name": "フェローチェ",
        "height": 1.8,
        "weight": 25
    },
    {
        "id": 937,
        "name": "デンジュモク",
        "height": 3.8,
        "weight": 100
    },
    {
        "id": 938,
        "name": "テッカグヤ",
        "height": 9.2,
        "weight": 999.9
    },
    {
        "id": 939,
        "name": "カミツルギ",
        "height": 0.3,
        "weight": 0.1
    },
    {
        "id": 940,
        "name": "アクジキング",
        "height": 5.5,
        "weight": 888
    },
    {
        "id": 941,
        "name": "ネクロズマ",
        "height": 2.4,
        "weight": 230
    },
    {
        "id": 942,
        "name": "ネクロズマ(たそがれのたてがみ)",
        "height": 3.8,
        "weight": 460
    },
    {
        "id": 943,
        "name": "ネクロズマ(あかつきのつばさ)",
        "height": 4.2,
        "weight": 350
    },
    {
        "id": 944,
        "name": "ネクロズマ(ウルトラネクロズマ)",
        "height": 7.5,
        "weight": 230
    },
    {
        "id": 945,
        "name": "マギアナ",
        "height": 1,
        "weight": 80.5
    },
    {
        "id": 946,
        "name": "マーシャドー",
        "height": 0.7,
        "weight": 22.2
    },
    {
        "id": 947,
        "name": "ベベノム",
        "height": 0.6,
        "weight": 1.8
    },
    {
        "id": 948,
        "name": "アーゴヨン",
        "height": 3.6,
        "weight": 150
    },
    {
        "id": 949,
        "name": "ツンデツンデ",
        "height": 5.5,
        "weight": 820
    },
    {
        "id": 950,
        "name": "ズガドーン",
        "height": 1.8,
        "weight": 13
    },
    {
        "id": 951,
        "name": "ゼラオラ",
        "height": 1.5,
        "weight": 44.5
    },
    {
        "id": 952,
        "name": "メルタン",
        "height": 0.2,
        "weight": 8
    },
    {
        "id": 953,
        "name": "メルメタル",
        "height": 2.5,
        "weight": 800
    },
    {
        "id": 954,
        "name": "サルノリ",
        "height": 0.3,
        "weight": 5
    },
    {
        "id": 955,
        "name": "バチンキー",
        "height": 0.7,
        "weight": 14
    },
    {
        "id": 956,
        "name": "ゴリランダー",
        "height": 2.1,
        "weight": 90
    },
    {
        "id": 957,
        "name": "ヒバニー",
        "height": 0.3,
        "weight": 4.5
    },
    {
        "id": 958,
        "name": "ラビフット",
        "height": 0.6,
        "weight": 9
    },
    {
        "id": 959,
        "name": "エースバーン",
        "height": 1.4,
        "weight": 33
    },
    {
        "id": 960,
        "name": "メッソン",
        "height": 0.3,
        "weight": 4
    },
    {
        "id": 961,
        "name": "ジメレオン",
        "height": 0.7,
        "weight": 11.5
    },
    {
        "id": 962,
        "name": "インテレオン",
        "height": 1.9,
        "weight": 45.2
    },
    {
        "id": 963,
        "name": "ホシガリス",
        "height": 0.3,
        "weight": 2.5
    },
    {
        "id": 964,
        "name": "ヨクバリス",
        "height": 0.6,
        "weight": 6
    },
    {
        "id": 965,
        "name": "ココガラ",
        "height": 0.2,
        "weight": 1.8
    },
    {
        "id": 966,
        "name": "アオガラス",
        "height": 0.8,
        "weight": 16
    },
    {
        "id": 967,
        "name": "アーマーガア",
        "height": 2.2,
        "weight": 75
    },
    {
        "id": 968,
        "name": "サッチムシ",
        "height": 0.4,
        "weight": 8
    },
    {
        "id": 969,
        "name": "レドームシ",
        "height": 0.4,
        "weight": 19.5
    },
    {
        "id": 970,
        "name": "イオルブ",
        "height": 0.4,
        "weight": 40.8
    },
    {
        "id": 971,
        "name": "クスネ",
        "height": 0.6,
        "weight": 8.9
    },
    {
        "id": 972,
        "name": "フォクスライ",
        "height": 1.2,
        "weight": 19.9
    },
    {
        "id": 973,
        "name": "ヒメンカ",
        "height": 0.4,
        "weight": 2.2
    },
    {
        "id": 974,
        "name": "ワタシラガ",
        "height": 0.5,
        "weight": 2.5
    },
    {
        "id": 975,
        "name": "ウールー",
        "height": 0.6,
        "weight": 6
    },
    {
        "id": 976,
        "name": "バイウールー",
        "height": 1.3,
        "weight": 43
    },
    {
        "id": 977,
        "name": "カムカメ",
        "height": 0.3,
        "weight": 8.5
    },
    {
        "id": 978,
        "name": "カジリガメ",
        "height": 1,
        "weight": 115.5
    },
    {
        "id": 979,
        "name": "ワンパチ",
        "height": 0.3,
        "weight": 13.5
    },
    {
        "id": 980,
        "name": "パルスワン",
        "height": 1,
        "weight": 34
    },
    {
        "id": 981,
        "name": "タンドン",
        "height": 0.3,
        "weight": 12
    },
    {
        "id": 982,
        "name": "トロッゴン",
        "height": 1.1,
        "weight": 78
    },
    {
        "id": 983,
        "name": "セキタンザン",
        "height": 2.8,
        "weight": 310.5
    },
    {
        "id": 984,
        "name": "カジッチュ",
        "height": 0.2,
        "weight": 0.5
    },
    {
        "id": 985,
        "name": "アップリュー",
        "height": 0.3,
        "weight": 1
    },
    {
        "id": 986,
        "name": "タルップル",
        "height": 0.4,
        "weight": 13
    },
    {
        "id": 987,
        "name": "スナヘビ",
        "height": 2.2,
        "weight": 7.6
    },
    {
        "id": 988,
        "name": "サダイジャ",
        "height": 3.8,
        "weight": 65.5
    },
    {
        "id": 989,
        "name": "ウッウ",
        "height": 0.8,
        "weight": 18
    },
    {
        "id": 990,
        "name": "サシカマス",
        "height": 0.5,
        "weight": 1
    },
    {
        "id": 991,
        "name": "カマスジョー",
        "height": 1.3,
        "weight": 30
    },
    {
        "id": 992,
        "name": "エレズン",
        "height": 0.4,
        "weight": 11
    },
    {
        "id": 993,
        "name": "ストリンダー",
        "height": 1.6,
        "weight": 40
    },
    {
        "id": 994,
        "name": "ヤクデ",
        "height": 0.7,
        "weight": 1
    },
    {
        "id": 995,
        "name": "マルヤクデ",
        "height": 3,
        "weight": 120
    },
    {
        "id": 996,
        "name": "タタッコ",
        "height": 0.6,
        "weight": 4
    },
    {
        "id": 997,
        "name": "オトスパス",
        "height": 1.6,
        "weight": 39
    },
    {
        "id": 998,
        "name": "ヤバチャ",
        "height": 0.1,
        "weight": 0.2
    },
    {
        "id": 999,
        "name": "ポットデス",
        "height": 0.2,
        "weight": 0.4
    },
    {
        "id": 1000,
        "name": "ミブリム",
        "height": 0.4,
        "weight": 3.4
    },
    {
        "id": 1001,
        "name": "テブリム",
        "height": 0.6,
        "weight": 4.8
    },
    {
        "id": 1002,
        "name": "ブリムオン",
        "height": 2.1,
        "weight": 5.1
    },
    {
        "id": 1003,
        "name": "ベロバー",
        "height": 0.4,
        "weight": 5.5
    },
    {
        "id": 1004,
        "name": "ギモー",
        "height": 0.8,
        "weight": 12.5
    },
    {
        "id": 1005,
        "name": "オーロンゲ",
        "height": 1.5,
        "weight": 61
    },
    {
        "id": 1006,
        "name": "タチフサグマ",
        "height": 1.6,
        "weight": 46
    },
    {
        "id": 1007,
        "name": "ニャイキング",
        "height": 0.8,
        "weight": 28
    },
    {
        "id": 1008,
        "name": "サニゴーン",
        "height": 1,
        "weight": 0.4
    },
    {
        "id": 1009,
        "name": "ネギガナイト",
        "height": 0.8,
        "weight": 117
    },
    {
        "id": 1010,
        "name": "バリコオル",
        "height": 1.5,
        "weight": 58.2
    },
    {
        "id": 1011,
        "name": "デスバーン",
        "height": 1.6,
        "weight": 66.6
    },
    {
        "id": 1012,
        "name": "マホミル",
        "height": 0.2,
        "weight": 0.3
    },
    {
        "id": 1013,
        "name": "マホイップ",
        "height": 0.3,
        "weight": 0.5
    },
    {
        "id": 1014,
        "name": "タイレーツ",
        "height": 3,
        "weight": 62
    },
    {
        "id": 1015,
        "name": "バチンウニ",
        "height": 0.3,
        "weight": 1
    },
    {
        "id": 1016,
        "name": "ユキハミ",
        "height": 0.3,
        "weight": 3.8
    },
    {
        "id": 1017,
        "name": "モスノウ",
        "height": 1.3,
        "weight": 42
    },
    {
        "id": 1018,
        "name": "イシヘンジン",
        "height": 2.5,
        "weight": 520
    },
    {
        "id": 1019,
        "name": "コオリッポ",
        "height": 1.4,
        "weight": 89
    },
    {
        "id": 1020,
        "name": "イエッサン",
        "height": 0.9,
        "weight": 28
    },
    {
        "id": 1021,
        "name": "モルペコ",
        "height": 0.3,
        "weight": 3
    },
    {
        "id": 1022,
        "name": "ゾウドウ",
        "height": 1.2,
        "weight": 100
    },
    {
        "id": 1023,
        "name": "ダイオウドウ",
        "height": 3,
        "weight": 650
    },
    {
        "id": 1024,
        "name": "パッチラゴン",
        "height": 1.8,
        "weight": 190
    },
    {
        "id": 1025,
        "name": "パッチルドン",
        "height": 2.3,
        "weight": 150
    },
    {
        "id": 1026,
        "name": "ウオノラゴン",
        "height": 2.3,
        "weight": 215
    },
    {
        "id": 1027,
        "name": "ウオチルドン",
        "height": 2,
        "weight": 175
    },
    {
        "id": 1028,
        "name": "ジュラルドン",
        "height": 1.8,
        "weight": 40
    },
    {
        "id": 1029,
        "name": "ドラメシヤ",
        "height": 0.5,
        "weight": 2
    },
    {
        "id": 1030,
        "name": "ドロンチ",
        "height": 1.4,
        "weight": 11
    },
    {
        "id": 1031,
        "name": "ドラパルト",
        "height": 3,
        "weight": 50
    },
    {
        "id": 1032,
        "name": "ザシアン(れきせんのゆうしゃ)",
        "height": 2.8,
        "weight": 110
    },
    {
        "id": 1033,
        "name": "ザシアン(けんのおう)",
        "height": 2.8,
        "weight": 355
    },
    {
        "id": 1034,
        "name": "ザマゼンタ(れきせんのゆうしゃ)",
        "height": 2.9,
        "weight": 210
    },
    {
        "id": 1035,
        "name": "ザマゼンタ(たてのおう)",
        "height": 2.9,
        "weight": 785
    },
    {
        "id": 1036,
        "name": "ムゲンダイナ",
        "height": 20,
        "weight": 950
    },
    {
        "id": 1037,
        "name": "ムゲンダイナ(ムゲンダイマックス)",
        "height": 100,
        "weight": 10000000
    },
    {
        "id": 1038,
        "name": "ダクマ",
        "height": 0.6,
        "weight": 12
    },
    {
        "id": 1039,
        "name": "ウーラオス",
        "height": 1.9,
        "weight": 105
    },
    {
        "id": 1040,
        "name": "ザルード",
        "height": 1.8,
        "weight": 70
    },
    {
        "id": 1041,
        "name": "レジエレキ",
        "height": 1.2,
        "weight": 145
    },
    {
        "id": 1042,
        "name": "レジドラゴ",
        "height": 2.1,
        "weight": 200
    },
    {
        "id": 1043,
        "name": "ブリザポス",
        "height": 2.2,
        "weight": 800
    },
    {
        "id": 1044,
        "name": "レイスポス",
        "height": 2,
        "weight": 44.5
    },
    {
        "id": 1045,
        "name": "バドレックス",
        "height": 1.1,
        "weight": 7.7
    },
    {
        "id": 1046,
        "name": "バドレックス(はくばじょうのすがた)",
        "height": 2.4,
        "weight": 809.1
    },
    {
        "id": 1047,
        "name": "バドレックス(こくばじょうのすがた)",
        "height": 2.4,
        "weight": 53.6
    },
    {
        "id": 1048,
        "name": "アヤシシ",
        "height": 1.8,
        "weight": 95.1
    },
    {
        "id": 1049,
        "name": "バサギリ",
        "height": 1.8,
        "weight": 89
    },
    {
        "id": 1050,
        "name": "ガチグマ",
        "height": 2.4,
        "weight": 290
    },
    {
        "id": 1051,
        "name": "イダイトウ",
        "height": 3,
        "weight": 110
    },
    {
        "id": 1052,
        "name": "オオニューラ",
        "height": 1.3,
        "weight": 43
    },
    {
        "id": 1053,
        "name": "ハリーマン",
        "height": 2.5,
        "weight": 60.5
    },
    {
        "id": 1054,
        "name": "ラブトロス",
        "height": 1.6,
        "weight": 48
    },
    {
        "id": 1055,
        "name": "ニャオハ",
        "height": 0.4,
        "weight": 4.1
    },
    {
        "id": 1056,
        "name": "ニャローテ",
        "height": 0.9,
        "weight": 12.2
    },
    {
        "id": 1057,
        "name": "マスカーニャ",
        "height": 1.5,
        "weight": 31.2
    },
    {
        "id": 1058,
        "name": "ホゲータ",
        "height": 0.4,
        "weight": 9.8
    },
    {
        "id": 1059,
        "name": "アチゲータ",
        "height": 1,
        "weight": 30.7
    },
    {
        "id": 1060,
        "name": "ラウドボーン",
        "height": 1.6,
        "weight": 326.5
    },
    {
        "id": 1061,
        "name": "クワッス",
        "height": 0.5,
        "weight": 6.1
    },
    {
        "id": 1062,
        "name": "ウェルカモ",
        "height": 1.2,
        "weight": 21.5
    },
    {
        "id": 1063,
        "name": "ウェーニバル",
        "height": 1.8,
        "weight": 61.9
    },
    {
        "id": 1064,
        "name": "グルトン",
        "height": 0.5,
        "weight": 10.2
    },
    {
        "id": 1065,
        "name": "パフュートン",
        "height": 1,
        "weight": 120
    },
    {
        "id": 1066,
        "name": "タマンチュラ",
        "height": 0.3,
        "weight": 4
    },
    {
        "id": 1067,
        "name": "ワナイダー",
        "height": 1,
        "weight": 16.5
    },
    {
        "id": 1068,
        "name": "マメバッタ",
        "height": 0.2,
        "weight": 1
    },
    {
        "id": 1069,
        "name": "エクスレッグ",
        "height": 1,
        "weight": 17.5
    },
    {
        "id": 1070,
        "name": "パモ",
        "height": 0.3,
        "weight": 2.5
    },
    {
        "id": 1071,
        "name": "パモット",
        "height": 0.4,
        "weight": 6.5
    },
    {
        "id": 1072,
        "name": "パーモット",
        "height": 0.9,
        "weight": 41
    },
    {
        "id": 1073,
        "name": "ワッカネズミ",
        "height": 0.3,
        "weight": 1.8
    },
    {
        "id": 1074,
        "name": "イッカネズミ(3びきかぞく)",
        "height": 0.3,
        "weight": 2.3
    },
    {
        "id": 1075,
        "name": "イッカネズミ(4ひきかぞく)",
        "height": 0.3,
        "weight": 2.8
    },
    {
        "id": 1076,
        "name": "パピモッチ",
        "height": 0.3,
        "weight": 10.9
    },
    {
        "id": 1077,
        "name": "バウッツェル",
        "height": 0.5,
        "weight": 14.9
    },
    {
        "id": 1078,
        "name": "ミニーブ",
        "height": 0.3,
        "weight": 6.5
    },
    {
        "id": 1079,
        "name": "オリーニョ",
        "height": 0.6,
        "weight": 11.9
    },
    {
        "id": 1080,
        "name": "オリーヴァ",
        "height": 1.4,
        "weight": 48.2
    },
    {
        "id": 1081,
        "name": "イキリンコ",
        "height": 0.6,
        "weight": 2.4
    },
    {
        "id": 1082,
        "name": "コジオ",
        "height": 0.4,
        "weight": 16
    },
    {
        "id": 1083,
        "name": "ジオヅム",
        "height": 0.6,
        "weight": 105
    },
    {
        "id": 1084,
        "name": "キョジオーン",
        "height": 2.3,
        "weight": 240
    },
    {
        "id": 1085,
        "name": "カルボウ",
        "height": 0.6,
        "weight": 10.5
    },
    {
        "id": 1086,
        "name": "グレンアルマ",
        "height": 1.5,
        "weight": 85
    },
    {
        "id": 1087,
        "name": "ソウブレイズ",
        "height": 1.6,
        "weight": 62
    },
    {
        "id": 1088,
        "name": "ズピカ",
        "height": 0.3,
        "weight": 0.4
    },
    {
        "id": 1089,
        "name": "ハラバリー",
        "height": 1.2,
        "weight": 113
    },
    {
        "id": 1090,
        "name": "カイデン",
        "height": 0.4,
        "weight": 3.6
    },
    {
        "id": 1091,
        "name": "タイカイデン",
        "height": 1.4,
        "weight": 38.6
    },
    {
        "id": 1092,
        "name": "オラチフ",
        "height": 0.5,
        "weight": 16
    },
    {
        "id": 1093,
        "name": "マフィティフ",
        "height": 1.1,
        "weight": 61
    },
    {
        "id": 1094,
        "name": "シルシュルー",
        "height": 0.2,
        "weight": 0.7
    },
    {
        "id": 1095,
        "name": "タギングル",
        "height": 0.7,
        "weight": 27.2
    },
    {
        "id": 1096,
        "name": "アノクサ",
        "height": 0.6,
        "weight": 0.6
    },
    {
        "id": 1097,
        "name": "アノホラグサ",
        "height": 1.2,
        "weight": 6
    },
    {
        "id": 1098,
        "name": "ノノクラゲ",
        "height": 0.9,
        "weight": 33
    },
    {
        "id": 1099,
        "name": "リククラゲ",
        "height": 1.9,
        "weight": 58
    },
    {
        "id": 1100,
        "name": "ガケガニ",
        "height": 1.3,
        "weight": 79
    },
    {
        "id": 1101,
        "name": "カプサイジ",
        "height": 0.3,
        "weight": 3
    },
    {
        "id": 1102,
        "name": "スコヴィラン",
        "height": 0.9,
        "weight": 15
    },
    {
        "id": 1103,
        "name": "シガロコ",
        "height": 0.2,
        "weight": 1
    },
    {
        "id": 1104,
        "name": "ベラカス",
        "height": 0.3,
        "weight": 3.5
    },
    {
        "id": 1105,
        "name": "ヒラヒナ",
        "height": 0.2,
        "weight": 1.5
    },
    {
        "id": 1106,
        "name": "クエスパトラ",
        "height": 1.9,
        "weight": 90
    },
    {
        "id": 1107,
        "name": "カヌチャン",
        "height": 0.4,
        "weight": 8.9
    },
    {
        "id": 1108,
        "name": "ナカヌチャン",
        "height": 0.7,
        "weight": 59.1
    },
    {
        "id": 1109,
        "name": "デカヌチャン",
        "height": 0.7,
        "weight": 112.8
    },
    {
        "id": 1110,
        "name": "ウミディグダ",
        "height": 1.2,
        "weight": 1.8
    },
    {
        "id": 1111,
        "name": "ウミトリオ",
        "height": 1.2,
        "weight": 5.4
    },
    {
        "id": 1112,
        "name": "オトシドリ",
        "height": 1.5,
        "weight": 42.9
    },
    {
        "id": 1113,
        "name": "ナミイルカ",
        "height": 1.3,
        "weight": 60.2
    },
    {
        "id": 1114,
        "name": "イルカマン(ナイーブフォルム)",
        "height": 1.3,
        "weight": 60.2
    },
    {
        "id": 1115,
        "name": "イルカマン(マイティフォルム)",
        "height": 1.8,
        "weight": 97.4
    },
    {
        "id": 1116,
        "name": "ブロロン",
        "height": 1,
        "weight": 35
    },
    {
        "id": 1117,
        "name": "ブロロローム",
        "height": 1.8,
        "weight": 120
    },
    {
        "id": 1118,
        "name": "モトトカゲ",
        "height": 1.6,
        "weight": 63
    },
    {
        "id": 1119,
        "name": "ミミズズ",
        "height": 2.5,
        "weight": 310
    },
    {
        "id": 1120,
        "name": "キラーメ",
        "height": 0.7,
        "weight": 8
    },
    {
        "id": 1121,
        "name": "キラフロル",
        "height": 1.5,
        "weight": 45
    },
    {
        "id": 1122,
        "name": "ボチ",
        "height": 0.6,
        "weight": 35
    },
    {
        "id": 1123,
        "name": "ハカドッグ",
        "height": 2,
        "weight": 15
    },
    {
        "id": 1124,
        "name": "カラミンゴ",
        "height": 1.6,
        "weight": 37
    },
    {
        "id": 1125,
        "name": "アルクジラ",
        "height": 1.2,
        "weight": 45
    },
    {
        "id": 1126,
        "name": "ハルクジラ",
        "height": 4.5,
        "weight": 700
    },
    {
        "id": 1127,
        "name": "ミガルーサ",
        "height": 2.5,
        "weight": 90
    },
    {
        "id": 1128,
        "name": "ヘイラッシャ",
        "height": 12,
        "weight": 220
    },
    {
        "id": 1129,
        "name": "シャリタツ",
        "height": 0.3,
        "weight": 8
    },
    {
        "id": 1130,
        "name": "コノヨザル",
        "height": 1.2,
        "weight": 56
    },
    {
        "id": 1131,
        "name": "ドオー",
        "height": 1.8,
        "weight": 223
    },
    {
        "id": 1132,
        "name": "リキキリン",
        "height": 3.2,
        "weight": 160
    },
    {
        "id": 1133,
        "name": "ノココッチ(ふたふしフォルム)",
        "height": 3.6,
        "weight": 39.2
    },
    {
        "id": 1134,
        "name": "ノココッチ(みつふしフォルム)",
        "height": 4.5,
        "weight": 47.4
    },
    {
        "id": 1135,
        "name": "ドドゲザン",
        "height": 2,
        "weight": 120
    },
    {
        "id": 1136,
        "name": "イダイナキバ",
        "height": 2.2,
        "weight": 320
    },
    {
        "id": 1137,
        "name": "サケブシッポ",
        "height": 1.2,
        "weight": 8
    },
    {
        "id": 1138,
        "name": "アラブルタケ",
        "height": 1.2,
        "weight": 21
    },
    {
        "id": 1139,
        "name": "ハバタクカミ",
        "height": 1.4,
        "weight": 4
    },
    {
        "id": 1140,
        "name": "チヲハウハネ",
        "height": 3.2,
        "weight": 92
    },
    {
        "id": 1141,
        "name": "スナノケガワ",
        "height": 2.3,
        "weight": 60
    },
    {
        "id": 1142,
        "name": "テツノワダチ",
        "height": 0.9,
        "weight": 240
    },
    {
        "id": 1143,
        "name": "テツノツツミ",
        "height": 0.6,
        "weight": 11
    },
    {
        "id": 1144,
        "name": "テツノカイナ",
        "height": 1.8,
        "weight": 380.7
    },
    {
        "id": 1145,
        "name": "テツノコウベ",
        "height": 1.3,
        "weight": 111
    },
    {
        "id": 1146,
        "name": "テツノドクガ",
        "height": 1.2,
        "weight": 36
    },
    {
        "id": 1147,
        "name": "テツノイバラ",
        "height": 1.6,
        "weight": 303
    },
    {
        "id": 1148,
        "name": "セビエ",
        "height": 0.5,
        "weight": 17
    },
    {
        "id": 1149,
        "name": "セゴール",
        "height": 0.8,
        "weight": 30
    },
    {
        "id": 1150,
        "name": "セグレイブ",
        "height": 2.1,
        "weight": 210
    },
    {
        "id": 1151,
        "name": "コレクレー(はこフォルム)",
        "height": 0.3,
        "weight": 5
    },
    {
        "id": 1152,
        "name": "コレクレー(とほフォルム)",
        "height": 0.1,
        "weight": 0.1
    },
    {
        "id": 1153,
        "name": "サーフゴー",
        "height": 1.2,
        "weight": 30
    },
    {
        "id": 1154,
        "name": "チオンジェン",
        "height": 1.5,
        "weight": 74.2
    },
    {
        "id": 1155,
        "name": "パオジアン",
        "height": 1.9,
        "weight": 152.2
    },
    {
        "id": 1156,
        "name": "ディンルー",
        "height": 2.7,
        "weight": 699.7
    },
    {
        "id": 1157,
        "name": "イーユイ",
        "height": 0.4,
        "weight": 4.9
    },
    {
        "id": 1158,
        "name": "トドロクツキ",
        "height": 2,
        "weight": 380
    },
    {
        "id": 1159,
        "name": "テツノブジン",
        "height": 1.4,
        "weight": 35
    },
    {
        "id": 1160,
        "name": "コライドン",
        "height": 2.5,
        "weight": 303
    },
    {
        "id": 1161,
        "name": "ミライドン",
        "height": 3.5,
        "weight": 240
    },
    {
        "id": 1162,
        "name": "ウネルミナモ",
        "height": 3.5,
        "weight": 280
    },
    {
        "id": 1163,
        "name": "テツノイサハ",
        "height": 1.5,
        "weight": 125
    }
];
