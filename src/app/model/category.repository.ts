import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";



@Injectable()

export class CategoryRepository implements OnInit{
    private categories: Category[] = [];

    constructor(private restService: RestService) {
        this.restService.getCategories().subscribe(
            categories => this.categories = categories);
        
    }

    ngOnInit(){
        
    }

    getCategory(id: number): Category | undefined {
        const category = this.categories.find(i => i.id === id);
        return category !== undefined ? category : undefined;
    }

    getCategories(): Category[] {
        return this.categories;
    }
    
}