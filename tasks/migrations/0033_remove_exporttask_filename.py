# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-04-10 19:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0032_auto_20170410_1909'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exporttask',
            name='filename',
        ),
    ]
