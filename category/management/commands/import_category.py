import csv
from datetime import datetime
from django.core.management.base import BaseCommand
from category.models import Category

class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str, help='Nome do arquivo com as categorias')


    def handle(self, *args, **options):
        file_name = options['file_name']

        with open(file_name, 'r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                name = row['name']
                self.stdout.write(self.style.NOTICE(name))

                Category.objects.create(name=name)
        
        self.stdout.write(self.style.SUCCESS('Categorias importadas'))
