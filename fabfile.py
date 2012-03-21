#!/usr/bin/python
# -*- coding: utf-8 -*-

from fabric.api import env, local
from fabric.contrib.project import rsync_project

env.hosts = ['www.xiuxiu.de']
env.user = 'root'
env.path = '/home/wwwroot/eat.xiuxiu.de'


def deploy():
    rsync_project(env.path, local_dir='./', delete=True, exclude=['*.pyc','*.py', 'build'])
