import { Request, Response } from 'express';
import knex from '../database/connect';

class PointsController {

    async index(req: Request, res: Response) {
        const { city, uf, items } = req.query;

        const parsedItems = String(items)
            .split(',').map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        res.json(points)
    }

    async show(req: Request, res: Response) {

        const { id } = req.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            res.status(400).json({ message: 'Point not found!' })
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        res.json({ point, items })
    }

    async create(req: Request, res: Response) {

        const { name, email, whatsapp, latitude,
            longitude, city, uf, items } = req.body;

        const trx = await knex.transaction();

        const point = {
            image: 'https://image.freepik.com/vetores-gratis/carrinho-de-compras-de-supermercado-com-pictograma-mercearia_1284-11697.jpg',
            name, email, whatsapp, latitude,
            longitude, city, uf
        }

        const insertedItems = await trx('points').insert(point);
        const point_id = insertedItems[0]

        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        })

        await trx('point_items').insert(pointItems);

        await trx.commit();

        res.json({
            id: point_id,
            ...point
        })

    }
}

export default new PointsController();