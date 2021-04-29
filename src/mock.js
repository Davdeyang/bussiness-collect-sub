// mock.js
import Mock from 'mockjs'
Mock.mock("/api/workbench/secret/list", 'get', {
    code:200,
    data:{
        expired_decryption_num:1000,
        next_year_decrypt_num:268,
        not_decrypted_num:123,
        inside_num:345,
        decrypted_num:654,
        twelve_decrypt_num:118,
    }
});
Mock.mock("/api/workbench/original/num", 'get', {
    code:200,
    data:{
        expired_decryption:{
            decrypted_num:23,
            total:300,
            not_decrypted_num:100
        },
        next_year_decrypt:{
            decrypted_num:111,
            total:300,
            not_decrypted_num:9
        },
        not_decrypted:{
            decrypted_num:50,
            total:300,
            not_decrypted_num:60
        },
        inside:{
            decrypted_num:29,
            total:300,
            not_decrypted_num:200
        },
        decrypted:{
            decrypted_num:77,
            total:300,
            not_decrypted_num:134
        },
        twelve_decrypt:{
            decrypted_num:13,
            total:300,
            not_decrypted_num:45
        }
    }
});

Mock.mock("/api/workbench/derive/num", 'get', {
    code:200,
    data:{
        expired_decryption:{
            decrypted_num:123,
            total:300,
            not_decrypted_num:10
        },
        next_year_decrypt:{
            decrypted_num:200,
            total:300,
            not_decrypted_num:90
        },
        not_decrypted:{
            decrypted_num:150,
            total:300,
            not_decrypted_num:30
        },
        inside:{
            decrypted_num:29,
            total:300,
            not_decrypted_num:200
        },
        decrypted:{
            decrypted_num:77,
            total:300,
            not_decrypted_num:134
        },
        twelve_decrypt:{
            decrypted_num:13,
            total:300,
            not_decrypted_num:45
        }
    }
});
Mock.mock("/api/insert/new/file", 'post', {
    code:200,
    data:'提交成功！'
});
Mock.mock("/api/insert/new/file/list", 'get', {
    code:200,
    data:[
         {
                mark:'a',
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                province: 'America',
                city: 'New York',
                zip: 100000,
                secrecy_date:'5年'
            },
            {
                mark:'f',
                name: 'Jim Green',
                age: 24,
                address: 'Washington, D.C. No. 1 Lake Park',
                province: 'America',
                city: 'Washington, D.C.',
                zip: 100000,
                secrecy_date:'10年'
            },
            {
                mark:'b',
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                province: 'Australian',
                city: 'Sydney',
                zip: 100000,
                secrecy_date:'20年'
            },
            {
                mark:'d',
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                province: 'Canada',
                city: 'Ottawa',
                zip: 100000,
                secrecy_date:'默认'
            },
            {
                mark:'f',
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                province: 'Canada',
                city: 'Ottawa',
                zip: 100000,
                secrecy_date:'默认'
            },
    ]
});
Mock.mock("/api/library/list", 'get', {
    code:200,
    data:[
        {
            mark:'f',
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            province: 'America',
            city: 'New York',
            zip: 100000,
            secrecy_date:'20年'
        },
        {
            mark:'e',
            name: 'Jim Green',
            age: 24,
            address: 'Washington, D.C. No. 1 Lake Park',
            province: 'America',
            city: 'Washington, D.C.',
            zip: 100000,
            secrecy_date:'30年'
        },
        {
            mark:'a',
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            province: 'Australian',
            city: 'Sydney',
            zip: 100000,
            secrecy_date:'10年'
        },
        {
            mark:'d',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'e',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'c',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'a',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'b',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'e',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
        {
            mark:'d',
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            province: 'Canada',
            city: 'Ottawa',
            zip: 100000,
            secrecy_date:'默认'
        },
    ]
});