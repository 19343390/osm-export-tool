# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-03-23 21:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0028_promote_pbf_export_format'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='region',
        ),
        migrations.DeleteModel(
            name='Region',
        ),
    ]